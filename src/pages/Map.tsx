import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Anchor, 
  Gem, 
  Skull, 
  Crown,
  Navigation,
  Eye,
  Target
} from "lucide-react";
import worldMapImage from "@/assets/world-map.jpg";

const Map = () => {
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);

  const islands = [
    {
      id: "1",
      name: "Skull Island",
      type: "Danger",
      level: 85,
      description: "Ancient ruins hide terrible secrets and immense treasure.",
      coordinates: { x: 25, y: 30 },
      resources: ["Ancient Gold", "Cursed Artifacts"],
      difficulty: "Legendary",
      status: "Explored"
    },
    {
      id: "2", 
      name: "Emerald Bay",
      type: "Trade",
      level: 45,
      description: "Peaceful trading port with exotic goods and information.",
      coordinates: { x: 60, y: 45 },
      resources: ["Supplies", "Maps", "Crew"],
      difficulty: "Easy",
      status: "Friendly"
    },
    {
      id: "3",
      name: "Dragon's Tooth",
      type: "Combat",
      level: 95,
      description: "Fortress island controlled by the legendary Red Dragon Pirates.",
      coordinates: { x: 80, y: 20 },
      resources: ["Devil Fruits", "Legendary Weapons"],
      difficulty: "Nightmare",
      status: "Hostile"
    },
    {
      id: "4",
      name: "Mist Island",
      type: "Mystery",
      level: 60,
      description: "Shrouded in eternal fog, hiding ancient mysteries.",
      coordinates: { x: 40, y: 70 },
      resources: ["Unknown", "?????"],
      difficulty: "Hard",
      status: "Unexplored"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500";
      case "Hard": return "bg-yellow-500";
      case "Legendary": return "bg-purple-500";
      case "Nightmare": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Friendly": return "text-green-600";
      case "Hostile": return "text-red-600";
      case "Explored": return "text-blue-600";
      case "Unexplored": return "text-gray-600";
      default: return "text-gray-600";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Danger": return Skull;
      case "Trade": return Anchor;
      case "Combat": return Target;
      case "Mystery": return Eye;
      default: return MapPin;
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Grand Line World Map
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Navigate the treacherous waters and discover legendary islands
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Display */}
        <div className="lg:col-span-2">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-ocean-deep">
                <Navigation className="h-6 w-6" />
                World Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden border-4 border-wood-medium shadow-deep">
                <img 
                  src={worldMapImage} 
                  alt="World Map" 
                  className="w-full h-full object-cover"
                />
                
                {/* Island Markers */}
                {islands.map((island) => {
                  const IconComponent = getTypeIcon(island.type);
                  return (
                    <button
                      key={island.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        selectedIsland === island.id 
                          ? 'scale-125 z-20' 
                          : 'scale-100 z-10 hover:scale-110'
                      }`}
                      style={{ 
                        left: `${island.coordinates.x}%`, 
                        top: `${island.coordinates.y}%` 
                      }}
                      onClick={() => setSelectedIsland(island.id)}
                    >
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${getDifficultyColor(island.difficulty)}`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {island.name}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-black/75 text-white p-3 rounded-lg">
                  <h4 className="font-cinzel font-semibold mb-2">Legend</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Easy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Hard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Legendary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Nightmare</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Island Details */}
        <div className="space-y-6">
          {selectedIsland ? (
            (() => {
              const island = islands.find(i => i.id === selectedIsland);
              if (!island) return null;
              const IconComponent = getTypeIcon(island.type);
              
              return (
                <Card className="rope-border bg-parchment shadow-treasure">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                      <IconComponent className="h-5 w-5" />
                      {island.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className={getDifficultyColor(island.difficulty)}>
                        Level {island.level}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(island.status)}>
                        {island.status}
                      </Badge>
                    </div>
                    
                    <p className="font-cinzel text-sm text-muted-foreground">
                      {island.description}
                    </p>
                    
                    <div>
                      <h4 className="font-cinzel font-semibold mb-2">Resources:</h4>
                      <div className="flex flex-wrap gap-1">
                        {island.resources.map((resource, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-ocean text-white hover:bg-ocean-light transition-bounce">
                        <MapPin className="h-4 w-4 mr-2" />
                        Set Course
                      </Button>
                      {island.status === "Unexplored" && (
                        <Button variant="outline" className="w-full border-treasure text-treasure hover:bg-treasure hover:text-white">
                          <Eye className="h-4 w-4 mr-2" />
                          Scout Island
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
                <Navigation className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-pirata text-xl text-primary mb-2">
                  Select an Island
                </h3>
                <p className="font-cinzel text-sm text-muted-foreground">
                  Click on any island marker to view details and plan your next adventure.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Current Ship Position */}
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-accent">
                <Anchor className="h-5 w-5" />
                Ship Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-cinzel text-sm">Current Location:</span>
                  <span className="font-cinzel text-sm font-semibold">Port Royal</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-cinzel text-sm">Fuel:</span>
                  <span className="font-cinzel text-sm font-semibold text-green-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-cinzel text-sm">Crew Morale:</span>
                  <span className="font-cinzel text-sm font-semibold text-blue-600">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-cinzel text-sm">Speed:</span>
                  <span className="font-cinzel text-sm font-semibold">15 knots</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Map;