import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import './WalletBalance.css';

const WalletBalance = ({ content }) => {
  const [balance, setBalance] = useState(null);
  const walletAddress = 'Bia1MBxtRdnH3gvipmBofJNwHyuZNCa66HpqNGHWzg4y';
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
        const solBalance = lamports / 1e9;

        setBalance(solBalance.toLocaleString('en-US', { maximumFractionDigits: 2 }));
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
        setBalance('Error');
      }
    };

    getBalance();
  }, [rpcUrl]);

  return (
    <div className="wallet-balance-strip">
      <h3>{content.walletTitle}</h3>
      <div className="wallet-info">
        <span className="wallet-balance">{balance !== null ? `${balance} SOL` : 'Loading...'}</span>
      </div>
      <a
        href={`https://solscan.io/account/${walletAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wallet-address-link"
      >
        {walletAddress}
      </a>
    </div>
  );
};

export default WalletBalance;