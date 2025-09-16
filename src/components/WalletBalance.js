import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import './WalletBalance.css';

const WalletBalance = ({ content }) => {
  const [balance, setBalance] = useState(null);
  const walletAddress = 'Bia1MBxtRdnH3gvipmBofJNwHyuZNCa66HpqNGHWzg4y';

  // Pega a URL da RPC do arquivo .env. Se não existir, usa uma pública como fallback.
  const rpcUrl = process.env.REACT_APP_SOLANA_RPC_URL;

  useEffect(() => {
    if (!rpcUrl) {
      console.error("Solana RPC URL not found. Please set REACT_APP_SOLANA_RPC_URL in your .env file.");
      setBalance('Config Error');
      return;
    }

    const getBalance = async () => {
      try {
        const connection = new Connection(rpcUrl, 'confirmed');
        const publicKey = new PublicKey(walletAddress);
        const lamports = await connection.getBalance(publicKey);
        const solBalance = lamports / 1e9; // 1 SOL = 10^9 lamports

        setBalance(solBalance.toLocaleString('en-US', { maximumFractionDigits: 2 }));
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
        setBalance('Error');
      }
    };

    getBalance();
  }, [rpcUrl]); // O useEffect será re-executado se a rpcUrl mudar

  return (
    <div className="wallet-balance-strip">
      <h3>{content.walletTitle}</h3>
      <div className="wallet-info">
        <span className="wallet-balance">{balance !== null ? `${balance} SOL` : 'Loading...'}</span>
      </div>
    </div>
  );
};

export default WalletBalance;