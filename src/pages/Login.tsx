import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Anchor, LogIn } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-deep bg-wood-texture">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/80 to-ocean-light/60"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game Description */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="font-pirata text-6xl text-parchment drop-shadow-lg mb-4">
                Grand Line Adventures
              </h1>
              <p className="font-cinzel text-xl text-parchment/90 leading-relaxed">
                Set sail on the treacherous Grand Line and become the next Pirate King!
              </p>
            </div>
            
            <div className="space-y-4 font-cinzel text-parchment/80">
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Build Your Crew</h3>
                  <p>Recruit powerful pirates and form the ultimate crew to conquer the seas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Explore Islands</h3>
                  <p>Navigate through mysterious islands, discover treasures, and battle rival pirates.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Upgrade Your Ship</h3>
                  <p>Enhance your vessel with powerful cannons, navigation tools, and crew quarters.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Become Pirate King</h3>
                  <p>Rise through the ranks, defeat the Four Emperors, and claim the One Piece!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="flex flex-col justify-center">
            <Card className="rope-border bg-parchment shadow-treasure">
              <CardHeader className="text-center">
                <CardTitle className="font-pirata text-3xl text-ocean-deep">
                  Set Sail
                </CardTitle>
                <p className="font-cinzel text-sm text-muted-foreground">
                  Enter your credentials to begin your adventure
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="font-cinzel font-semibold">
                      Pirate Name
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your pirate name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="font-cinzel border-wood-medium focus:border-ocean"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-cinzel font-semibold">
                      Secret Code
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your secret code"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="font-cinzel border-wood-medium focus:border-ocean"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-treasure text-wood-dark hover:bg-gold transition-bounce font-cinzel font-semibold"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Begin Adventure
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="font-cinzel text-sm text-muted-foreground">
                      New to the Grand Line?{" "}
                      <Link 
                        to="/register" 
                        className="text-ocean hover:text-ocean-deep font-semibold underline"
                      >
                        Join the Crew
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;