import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Anchor, 
  Users, 
  MapPin, 
  Crown, 
  Gem, 
  Swords,
  Wind,
  Navigation
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const quickStats = [
    { label: "Crew Members", value: "12", icon: Users, color: "text-ocean-light" },
    { label: "Islands Visited", value: "8", icon: MapPin, color: "text-treasure" },
    { label: "Bounty", value: "฿1.5B", icon: Crown, color: "text-gold" },
    { label: "Treasure Found", value: "2,847", icon: Gem, color: "text-accent" },
  ];

  const recentActivities = [
    "Discovered Skull Island",
    "Recruited new navigator",
    "Defeated Marine Captain",
    "Found ancient treasure map",
    "Upgraded ship cannons",
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-5xl text-accent drop-shadow-lg">
          Welcome to Port Royal
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground max-w-2xl mx-auto">
          Your adventure begins here, Captain! The Grand Line awaits your conquest. 
          Set sail and become the next Pirate King!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="rope-border bg-parchment shadow-treasure hover:shadow-deep transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-wood-medium/20 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-bangers text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm font-cinzel text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
                <Navigation className="h-6 w-6" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/map">
                  <Button className="w-full h-20 bg-ocean text-white hover:bg-ocean-light transition-bounce rope-border">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <span className="font-cinzel font-semibold">Explore World Map</span>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/ship">
                  <Button className="w-full h-20 bg-wood text-gold hover:bg-wood-medium transition-bounce rope-border">
                    <div className="text-center">
                      <Anchor className="h-8 w-8 mx-auto mb-2" />
                      <span className="font-cinzel font-semibold">Manage Ship</span>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/army">
                  <Button className="w-full h-20 bg-treasure text-wood-dark hover:bg-gold transition-bounce rope-border">
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto mb-2" />
                      <span className="font-cinzel font-semibold">Train Crew</span>
                    </div>
                  </Button>
                </Link>
                
                <Button className="w-full h-20 bg-accent text-white hover:bg-accent/80 transition-bounce rope-border">
                  <div className="text-center">
                    <Swords className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-cinzel font-semibold">Battle Mode</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="rope-border bg-parchment shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
              <Wind className="h-5 w-5" />
              Recent Adventures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-wood-medium/10 border border-wood-light"
                >
                  <div className="w-2 h-2 bg-treasure rounded-full"></div>
                  <span className="font-cinzel text-sm text-foreground">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weather & News */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardHeader>
            <CardTitle className="font-pirata text-xl text-ocean-deep">
              Grand Line Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-bangers text-ocean-light">Sunny</p>
                <p className="font-cinzel text-muted-foreground">Perfect sailing conditions</p>
              </div>
              <Wind className="h-12 w-12 text-ocean-light" />
            </div>
          </CardContent>
        </Card>

        <Card className="rope-border bg-parchment shadow-treasure">
          <CardHeader>
            <CardTitle className="font-pirata text-xl text-accent">
              Marine Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-cinzel text-foreground">
              Admiral Kizaru spotted near Water 7. All pirates advised to 
              proceed with caution in that region.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;