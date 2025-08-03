import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target,
  Navigation,
  ChefHat,
  Users,
  Anchor,
  Wrench,
  Coins,
  TrendingUp,
  Star,
  Lock
} from "lucide-react";
import shipInteriorImage from "@/assets/ship-interior.jpg";

const Ship = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const shipRooms = [
    {
      id: "1",
      name: "Cannon Bay",
      level: 3,
      maxLevel: 10,
      description: "Upgrade your cannons to deal more damage in naval battles.",
      icon: Target,
      upgradeCost: 50000,
      benefits: ["Damage +25%", "Range +15%", "Reload Speed +10%"],
      crew: 4,
      maxCrew: 6,
      type: "Combat"
    },
    {
      id: "2",
      name: "Navigation Room",
      level: 5,
      maxLevel: 10,
      description: "Advanced navigation equipment for faster and safer travel.",
      icon: Navigation,
      upgradeCost: 75000,
      benefits: ["Travel Speed +20%", "Storm Resistance +30%", "Map Quality +25%"],
      crew: 2,
      maxCrew: 3,
      type: "Utility"
    },
    {
      id: "3",
      name: "Kitchen",
      level: 4,
      maxLevel: 10,
      description: "Better food means better crew morale and health recovery.",
      icon: ChefHat,
      upgradeCost: 35000,
      benefits: ["Crew Morale +15%", "Health Regen +20%", "Cooking Quality +30%"],
      crew: 3,
      maxCrew: 4,
      type: "Support"
    },
    {
      id: "4",
      name: "Crew Quarters",
      level: 2,
      maxLevel: 10,
      description: "Comfortable quarters improve crew satisfaction and productivity.",
      icon: Users,
      upgradeCost: 40000,
      benefits: ["Max Crew +2", "Rest Quality +25%", "Recruitment Rate +15%"],
      crew: 8,
      maxCrew: 12,
      type: "Support"
    },
    {
      id: "5",
      name: "Treasury",
      level: 6,
      maxLevel: 10,
      description: "Secure storage for your treasure with advanced protection.",
      icon: Coins,
      upgradeCost: 100000,
      benefits: ["Storage +50%", "Theft Resistance +40%", "Interest Rate +5%"],
      crew: 1,
      maxCrew: 2,
      type: "Utility"
    },
    {
      id: "6",
      name: "Workshop",
      level: 1,
      maxLevel: 10,
      description: "Craft and repair equipment, weapons, and ship components.",
      icon: Wrench,
      upgradeCost: 25000,
      benefits: ["Repair Speed +30%", "Craft Quality +20%", "Resource Efficiency +15%"],
      crew: 0,
      maxCrew: 3,
      type: "Utility"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Combat": return "bg-red-500";
      case "Utility": return "bg-blue-500";
      case "Support": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const shipStats = {
    health: 85,
    speed: 78,
    attack: 92,
    defense: 67,
    morale: 88
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Going Merry - Your Ship
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Manage and upgrade your vessel to conquer the Grand Line
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ship Interior View */}
        <div className="lg:col-span-2">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-ocean-deep">
                <Anchor className="h-6 w-6" />
                Ship Interior
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden border-4 border-wood-medium shadow-deep">
                <img 
                  src={shipInteriorImage} 
                  alt="Ship Interior" 
                  className="w-full h-full object-cover"
                />
                
                {/* Room Hotspots */}
                <button
                  className="absolute top-[20%] left-[15%] w-16 h-16 bg-red-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all"
                  onClick={() => setSelectedRoom("1")}
                >
                  <Target className="h-8 w-8 text-white" />
                </button>
                
                <button
                  className="absolute top-[30%] right-[20%] w-16 h-16 bg-blue-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all"
                  onClick={() => setSelectedRoom("2")}
                >
                  <Navigation className="h-8 w-8 text-white" />
                </button>
                
                <button
                  className="absolute bottom-[30%] left-[25%] w-16 h-16 bg-green-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all"
                  onClick={() => setSelectedRoom("3")}
                >
                  <ChefHat className="h-8 w-8 text-white" />
                </button>
                
                <button
                  className="absolute bottom-[20%] right-[15%] w-16 h-16 bg-purple-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all"
                  onClick={() => setSelectedRoom("4")}
                >
                  <Users className="h-8 w-8 text-white" />
                </button>
                
                <button
                  className="absolute top-[50%] left-[50%] w-16 h-16 bg-yellow-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => setSelectedRoom("5")}
                >
                  <Coins className="h-8 w-8 text-white" />
                </button>
                
                <button
                  className="absolute bottom-[15%] left-[45%] w-16 h-16 bg-orange-500/80 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-all"
                  onClick={() => setSelectedRoom("6")}
                >
                  <Wrench className="h-8 w-8 text-white" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ship Stats & Room Details */}
        <div className="space-y-6">
          {/* Ship Stats */}
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                <Star className="h-5 w-5" />
                Ship Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(shipStats).map(([stat, value]) => (
                <div key={stat} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-cinzel text-sm capitalize">{stat}:</span>
                    <span className="font-cinzel text-sm font-semibold">{value}%</span>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Room Details */}
          {selectedRoom ? (
            (() => {
              const room = shipRooms.find(r => r.id === selectedRoom);
              if (!room) return null;
              
              return (
                <Card className="rope-border bg-parchment shadow-treasure">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                      <room.icon className="h-5 w-5" />
                      {room.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(room.type)}>
                        Level {room.level}/{room.maxLevel}
                      </Badge>
                      <Badge variant="outline">
                        {room.type}
                      </Badge>
                    </div>
                    
                    <p className="font-cinzel text-sm text-muted-foreground">
                      {room.description}
                    </p>
                    
                    <div>
                      <h4 className="font-cinzel font-semibold mb-2">Crew Assigned:</h4>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span className="font-cinzel text-sm">
                          {room.crew}/{room.maxCrew}
                        </span>
                        <Progress value={(room.crew / room.maxCrew) * 100} className="flex-1 h-2" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-cinzel font-semibold mb-2">Next Upgrade Benefits:</h4>
                      <div className="space-y-1">
                        {room.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 text-green-600" />
                            <span className="font-cinzel text-xs text-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {room.level < room.maxLevel ? (
                        <Button className="w-full bg-treasure text-wood-dark hover:bg-gold transition-bounce">
                          <Coins className="h-4 w-4 mr-2" />
                          Upgrade (฿{room.upgradeCost.toLocaleString()})
                        </Button>
                      ) : (
                        <Button disabled className="w-full">
                          <Star className="h-4 w-4 mr-2" />
                          Max Level Reached
                        </Button>
                      )}
                      
                      {room.crew < room.maxCrew && (
                        <Button variant="outline" className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white">
                          <Users className="h-4 w-4 mr-2" />
                          Assign Crew Member
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })()
          ) : (
            <Card className="rope-border bg-parchment shadow-treasure">
              <CardContent className="p-8 text-center">
                <Anchor className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-pirata text-xl text-primary mb-2">
                  Select a Room
                </h3>
                <p className="font-cinzel text-sm text-muted-foreground">
                  Click on any room icon to view details and manage upgrades.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* All Rooms Overview */}
      <Card className="rope-border bg-parchment shadow-ocean">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
            <Anchor className="h-6 w-6" />
            All Ship Rooms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shipRooms.map((room) => (
              <div
                key={room.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedRoom === room.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-wood-light hover:border-primary/50'
                }`}
                onClick={() => setSelectedRoom(room.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${getTypeColor(room.type)}`}>
                    <room.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cinzel font-semibold text-sm">{room.name}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Lv.{room.level}
                      </Badge>
                      {room.level < room.maxLevel && (
                        <Coins className="h-3 w-3 text-treasure" />
                      )}
                      {room.level === room.maxLevel && (
                        <Star className="h-3 w-3 text-gold" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{room.crew}/{room.maxCrew}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ship;