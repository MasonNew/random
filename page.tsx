'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, TrendingUp, Building2, Coins, Crown, Lock } from 'lucide-react'

export default function Component() {
  const [marketCap, setMarketCap] = useState(42069000000)
  const [wallHeight, setWallHeight] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketCap(prev => prev * 1.0042069)
      setWallHeight(prev => (prev + 1) % 100)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-white to-blue-500 overflow-hidden relative">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          >
            🧱
          </div>
        ))}
      </div>

      <header className="relative z-10 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-white p-6 text-center border-b-4 border-yellow-400">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 animate-pulse">
          $WALLCOIN
        </h1>
        <p className="text-xl md:text-2xl font-bold text-yellow-300">
          The Most Tremendous Coin in the History of Coins, Maybe Ever!
        </p>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white/90 backdrop-blur-lg border-4 border-yellow-400 animate-bounce-slow">
            <CardContent className="p-6 text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iRqSvb5KeS8OhWi53T0edbFAonOKFx.png"
                alt="Meme compilation"
                className="w-full rounded-lg mb-4 border-4 border-red-500"
              />
              <div className="space-y-2">
                <Badge className="bg-green-500 text-white text-lg px-4 py-2">
                  Current Wall Height: {wallHeight.toFixed(2)}m
                </Badge>
                <h2 className="text-3xl font-bold text-purple-800">
                  Market Cap: ${marketCap.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </h2>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="bg-white/90 backdrop-blur-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">🚀 Tokenomics</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Coins className="text-yellow-500" />
                    <span>Total Supply: 1,776,000,000,000 $WALL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="text-red-500" />
                    <span>Locked Liquidity: Until Wall Completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="text-purple-500" />
                    <span>Governance: Make Crypto Great Again DAO</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">🗺️ Roadmap</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="text-green-500" />
                    <span>Phase 1: Launch on DEXs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="text-blue-500" />
                    <span>Phase 2: Build Virtual Wall in Metaverse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="text-red-500" />
                    <span>Phase 3: Wall Reaches Moon</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xl font-bold px-8 py-6 rounded-full animate-pulse hover:scale-105 transition-transform"
            onClick={() => alert('Much wow! Very soon!')}
          >
            Buy $WALLCOIN
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: "Community", value: "1,000,000+ HOLDERS" },
            { title: "Burned", value: "42.0% SUPPLY" },
            { title: "Wall Progress", value: `${wallHeight}% COMPLETE` }
          ].map((stat, i) => (
            <Card key={i} className="bg-white/90 backdrop-blur-lg text-center">
              <CardContent className="p-4">
                <h4 className="text-lg font-bold text-purple-800">{stat.title}</h4>
                <p className="text-2xl font-bold text-green-600">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="relative z-10 bg-purple-900 text-white p-4 text-center mt-8">
        <p className="text-sm">
          This is not financial advice. 1 $WALL = 1 $WALL. To the moon! 🚀
        </p>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
      `}</style>
    </div>
  )
}