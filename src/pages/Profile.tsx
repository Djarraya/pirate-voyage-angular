import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Crown, 
  MapPin, 
  Users, 
  Gem,
  Swords,
  Trophy,
  Edit,
  Star
} from "lucide-react";
import playerAvatarImage from "@/assets/player-avatar.jpg";

const Profile = () => {
  const playerStats = {
    name: "Captain Monkey D. Luffy",
    title: "Straw Hat Captain",
    bounty: "฿1,500,000,000",
    level: 87,
    crew: 12,
    islands: 25,
    battles: 142,
    treasure: 15847
  };

  const achievements = [
    { name: "First Bounty", description: "Earned your first bounty", icon: Crown, unlocked: true },
    { name: "Island Explorer", description: "Visited 10 different islands", icon: MapPin, unlocked: true },
    { name: "Crew Leader", description: "Recruited 10 crew members", icon: Users, unlocked: true },
    { name: "Treasure Hunter", description: "Found 100 treasures", icon: Gem, unlocked: true },
    { name: "Battle Master", description: "Won 100 battles", icon: Swords, unlocked: false },
    { name: "Legendary Pirate", description: "Reach level 100", icon: Star, unlocked: false },
  ];

  const crewMembers = [
    { name: "Roronoa Zoro", role: "Swordsman", level: 85, specialty: "Combat" },
    { name: "Nami", role: "Navigator", level: 78, specialty: "Navigation" },
    { name: "Usopp", role: "Sniper", level: 72, specialty: "Ranged Combat" },
    { name: "Sanji", role: "Cook", level: 80, specialty: "Support" },
    { name: "Tony Tony Chopper", role: "Doctor", level: 68, specialty: "Healing" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Pirate Profile
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Your journey to become the Pirate King
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
                <User className="h-6 w-6" />
                Captain Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar Section */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32 border-4 border-gold shadow-treasure">
                    <AvatarImage src={playerAvatarImage} alt="Captain Avatar" />
                    <AvatarFallback className="bg-treasure text-wood-dark text-4xl">
                      L
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="border-treasure text-treasure hover:bg-treasure hover:text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Avatar
                  </Button>
                </div>

                {/* Stats Section */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="font-pirata text-3xl text-foreground">
                      {playerStats.name}
                    </h2>
                    <p className="font-cinzel text-lg text-accent">
                      {playerStats.title}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-wood-medium/10 rounded-lg rope-border">
                      <div className="text-2xl font-bangers text-gold">
                        {playerStats.level}
                      </div>
                      <div className="text-xs font-cinzel text-muted-foreground">
                        Level
                      </div>
                    </div>
                    <div className="text-center p-3 bg-wood-medium/10 rounded-lg rope-border">
                      <div className="text-2xl font-bangers text-ocean-light">
                        {playerStats.crew}
                      </div>
                      <div className="text-xs font-cinzel text-muted-foreground">
                        Crew
                      </div>
                    </div>
                    <div className="text-center p-3 bg-wood-medium/10 rounded-lg rope-border">
                      <div className="text-2xl font-bangers text-treasure">
                        {playerStats.islands}
                      </div>
                      <div className="text-xs font-cinzel text-muted-foreground">
                        Islands
                      </div>
                    </div>
                    <div className="text-center p-3 bg-wood-medium/10 rounded-lg rope-border">
                      <div className="text-2xl font-bangers text-accent">
                        {playerStats.battles}
                      </div>
                      <div className="text-xs font-cinzel text-muted-foreground">
                        Battles
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-cinzel font-semibold">Bounty:</span>
                      <span className="font-pirata text-xl text-gold">
                        {playerStats.bounty}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-cinzel font-semibold">Treasure Found:</span>
                      <span className="font-bangers text-lg text-treasure">
                        {playerStats.treasure.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crew Members */}
          <Card className="rope-border bg-parchment shadow-ocean mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
                <Users className="h-6 w-6" />
                Crew Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {crewMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-wood-medium/10 rounded-lg rope-border">
                    <Avatar className="w-12 h-12 border-2 border-gold">
                      <AvatarFallback className="bg-ocean text-white">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-cinzel font-semibold text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-sm font-cinzel text-muted-foreground">
                        {member.role}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Lv.{member.level}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {member.specialty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Sidebar */}
        <div className="space-y-6">
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                <Trophy className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      achievement.unlocked
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-gray-50 border-gray-200 text-gray-400'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      achievement.unlocked ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cinzel font-semibold text-sm">
                        {achievement.name}
                      </h4>
                      <p className="text-xs font-cinzel">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-primary">
                <Star className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm font-cinzel">
                <p>• Defeated Marine Captain (+50 EXP)</p>
                <p>• Discovered Skull Island (+100 EXP)</p>
                <p>• Recruited new crew member (+25 EXP)</p>
                <p>• Found ancient treasure (+75 EXP)</p>
                <p>• Upgraded ship cannons (+30 EXP)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;