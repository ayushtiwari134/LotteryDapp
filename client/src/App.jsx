import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Player from './components/Player';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const { ethereum } = window
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "createPlayer",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createRandomNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPlayers",
    "outputs": [
      {
        "internalType": "address payable[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWinner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "players",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "selectWinner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sendMoney",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  // console.log(signer);
  // console.log(signer.getAddress);
  const Lottery = new ethers.Contract(contractAddress, abi, signer);
  return Lottery;
}

function App() {
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState("");
  const [owner, setOwner] = useState("");
  const getOwner = async () => {
    const lottery = getContract();
    const owner = await lottery.owner();
    setOwner(owner);
  }
  const checkOwner = async () => {
    const lottery = getContract();
    const add = await lottery.getAddress();
    return add == owner;
  }
  const getPlayers = async () => {
    const lottery = getContract();
    const players = await lottery.getPlayers();
    setPlayers(players);
  }

  const selectWinner = async () => {
    const isOwner = await checkOwner();
    if (!isOwner) { alert("You are not the owner!") };
    const lottery = getContract();
    const tx = await lottery.selectWinner();
    await tx.wait();
    const winner = await lottery.winner();
    setWinner(winner);
  }
  const sendMoney = async () => {
    const isOwner = await checkOwner();
    if (!isOwner) { alert("You are not the owner!") };
    const lottery = getContract();

    const tx = await lottery.sendMoney();
    await tx.wait();
    setPlayers([]);
  }

  const createPlayer = async () => {
    const parsedAmount = ethers.utils.parseEther('0.1');
    const lottery = getContract();
    const tx = await lottery.createPlayer({ value: ethers.utils.parseEther('0.1') });
    console.log("loading");
    await tx.wait();
    console.log("finished");
  }

  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     if (!ethereum) console.log("Please connect metamask!!!");
  //     const accounts = await ethereum.request({ meethod: "eth_accounts" });
  //     console.log(accounts)
  //     if (accounts.length) {
  //       setCurrentAccount(accounts[0]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error("no ethereum object.")
  //   }
  // }
  const connectWallet = async () => {
    try {
      if (!ethereum) console.log("Install metamask");
      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("no eth object")
    }
  }
  const [currentAccount, setCurrentAccount] = useState('');
  useEffect(() => {
    // connectWallet();
    // getContract();
    // checkIfWalletIsConnected();
    getOwner();
  }, [])
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home currentAccount={currentAccount} connectWallet={connectWallet} owner={owner} />} />
          <Route path='/manager' element={<Manager currentAccount={currentAccount} selectWinner={selectWinner} owner={owner} winner={winner} sendMoney={sendMoney} />} />
          <Route path='/player' element={<Player getPlayers={getPlayers} players={players} createPlayer={createPlayer} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
