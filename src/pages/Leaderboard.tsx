import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Crown, 
  Medal,
  Gem,
  Users,
  MapPin,
  Swords,
  Star
} from "lucide-react";

const Leaderboard = () => {
  const topPirates = [
    {
      rank: 1,
      name: "Gol D. Roger",
      title: "Pirate King",
      bounty: "฿5,564,800,000",
      level: 100,
      crew: 28,
      islands: 167,
      battles: 892,
      status: "Legend"
    },
    {
      rank: 2,
      name: "Edward Newgate",
      title: "Whitebeard",
      bounty: "฿5,046,000,000",
      level: 98,
      crew: 25,
      islands: 143,
      battles: 756,
      status: "Yonko"
    },
    {
      rank: 3,
      name: "Kaido",
      title: "King of Beasts",
      bounty: "฿4,611,100,000",
      level: 97,
      crew: 23,
      islands: 128,
      battles: 634,
      status: "Yonko"
    },
    {
      rank: 4,
      name: "Charlotte Linlin",
      title: "Big Mom",
      bounty: "฿4,388,000,000",
      level: 96,
      crew: 26,
      islands: 156,
      battles: 723,
      status: "Yonko"
    },
    {
      rank: 5,
      name: "Shanks",
      title: "Red Hair",
      bounty: "฿4,048,900,000",
      level: 95,
      crew: 15,
      islands: 134,
      battles: 542,
      status: "Yonko"
    },
    {
      rank: 6,
      name: "Marshall D. Teach",
      title: "Blackbeard",
      bounty: "฿2,247,600,000",
      level: 88,
      crew: 18,
      islands: 95,
      battles: 387,
      status: "Yonko"
    },
    {
      rank: 7,
      name: "Monkey D. Luffy",
      title: "Straw Hat",
      bounty: "฿1,500,000,000",
      level: 87,
      crew: 12,
      islands: 78,
      battles: 234,
      status: "Supernova"
    },
    {
      rank: 8,
      name: "Trafalgar Law",
      title: "Surgeon of Death",
      bounty: "฿500,000,000",
      level: 83,
      crew: 8,
      islands: 62,
      battles: 156,
      status: "Supernova"
    },
  ];

  const categories = [
    { name: "Highest Bounty", icon: Crown, leader: "Gol D. Roger" },
    { name: "Most Islands", icon: MapPin, leader: "Gol D. Roger" },
    { name: "Most Battles", icon: Swords, leader: "Gol D. Roger" },
    { name: "Largest Crew", icon: Users, leader: "Edward Newgate" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-gold" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Trophy className="h-6 w-6 text-orange-600" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Legend": return "bg-gradient-to-r from-gold to-yellow-600 text-white";
      case "Yonko": return "bg-gradient-to-r from-red-600 to-red-800 text-white";
      case "Supernova": return "bg-gradient-to-r from-blue-600 to-blue-800 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Pirate Leaderboard
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          The most notorious pirates sailing the Grand Line
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Leaderboard */}
        <div className="lg:col-span-3">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
                <Trophy className="h-6 w-6" />
                Top Pirates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPirates.map((pirate) => (
                  <div
                    key={pirate.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                      pirate.rank <= 3 
                        ? 'border-gold bg-gold/10 shadow-treasure' 
                        : 'border-wood-light bg-wood-medium/5'
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(pirate.rank)}
                    </div>

                    {/* Avatar */}
                    <Avatar className="w-16 h-16 border-2 border-gold">
                      <AvatarFallback className="bg-ocean text-white font-bangers text-lg">
                        {pirate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-pirata text-xl text-foreground">
                          {pirate.name}
                        </h3>
                        <Badge className={getStatusColor(pirate.status)}>
                          {pirate.status}
                        </Badge>
                      </div>
                      <p className="font-cinzel text-accent mb-2">
                        {pirate.title}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="font-cinzel text-muted-foreground">Bounty:</span>
                          <div className="font-bangers text-gold">
                            {pirate.bounty}
                          </div>
                        </div>
                        <div>
                          <span className="font-cinzel text-muted-foreground">Level:</span>
                          <div className="font-bangers text-treasure">
                            {pirate.level}
                          </div>
                        </div>
                        <div>
                          <span className="font-cinzel text-muted-foreground">Crew:</span>
                          <div className="font-bangers text-ocean-light">
                            {pirate.crew}
                          </div>
                        </div>
                        <div>
                          <span className="font-cinzel text-muted-foreground">Islands:</span>
                          <div className="font-bangers text-accent">
                            {pirate.islands}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <Badge variant="outline" className="text-treasure border-treasure">
                      Lv.{pirate.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Categories */}
        <div className="space-y-6">
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                <Star className="h-5 w-5" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-wood-medium/10 rounded-lg rope-border">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <category.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cinzel font-semibold text-sm">
                        {category.name}
                      </h4>
                      <p className="text-xs font-cinzel text-muted-foreground">
                        {category.leader}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Your Rank */}
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-primary">
                <Gem className="h-5 w-5" />
                Your Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bangers text-accent">
                  #7
                </div>
                <div className="space-y-2">
                  <p className="font-cinzel text-sm">
                    <strong>Monkey D. Luffy</strong>
                  </p>
                  <p className="font-cinzel text-xs text-muted-foreground">
                    ฿1,500,000,000 bounty
                  </p>
                  <Badge className={getStatusColor("Supernova")}>
                    Supernova
                  </Badge>
                </div>
                <div className="text-xs font-cinzel text-muted-foreground">
                  Keep fighting to reach the top!
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Challenge */}
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-primary">
                <Trophy className="h-5 w-5" />
                Weekly Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="font-cinzel text-sm">
                  Defeat 10 Marine ships to earn bonus bounty!
                </p>
                <div className="text-xs font-cinzel text-muted-foreground">
                  Progress: 3/10
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-treasure h-2 rounded-full w-[30%]"></div>
                </div>
                <p className="text-xs font-cinzel text-treasure">
                  Reward: +100,000,000 bounty
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;