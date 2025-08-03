import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Anchor, UserPlus } from "lucide-react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", { username, email, password });
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
                Join the Crew
              </h1>
              <p className="font-cinzel text-xl text-parchment/90 leading-relaxed">
                Create your legend and start your journey to find the One Piece!
              </p>
            </div>
            
            <div className="space-y-4 font-cinzel text-parchment/80">
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Choose Your Path</h3>
                  <p>Decide whether to be a fearsome pirate, a noble marine, or a revolutionary.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Form Alliances</h3>
                  <p>Team up with other players to take on powerful enemies and share the spoils.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Claim Territory</h3>
                  <p>Conquer islands, build bases, and establish your dominance across the seas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Anchor className="h-6 w-6 text-treasure mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-parchment">Write Your Legend</h3>
                  <p>Every choice matters as you carve your name into the history of the Grand Line.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex flex-col justify-center">
            <Card className="rope-border bg-parchment shadow-treasure">
              <CardHeader className="text-center">
                <CardTitle className="font-pirata text-3xl text-ocean-deep">
                  Create Your Legend
                </CardTitle>
                <p className="font-cinzel text-sm text-muted-foreground">
                  Join thousands of pirates on the Grand Line
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="font-cinzel font-semibold">
                      Pirate Name
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose your pirate name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="font-cinzel border-wood-medium focus:border-ocean"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-cinzel font-semibold">
                      Navigation Log (Email)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="Create a secret code"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="font-cinzel border-wood-medium focus:border-ocean"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="font-cinzel font-semibold">
                      Confirm Secret Code
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your secret code"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="font-cinzel border-wood-medium focus:border-ocean"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-treasure text-wood-dark hover:bg-gold transition-bounce font-cinzel font-semibold"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Set Sail
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="font-cinzel text-sm text-muted-foreground">
                      Already have a crew?{" "}
                      <Link 
                        to="/login" 
                        className="text-ocean hover:text-ocean-deep font-semibold underline"
                      >
                        Return to Ship
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

export default Register;