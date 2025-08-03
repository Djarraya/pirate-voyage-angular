import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Sword, 
  Target, 
  Ship,
  Send,
  X
} from "lucide-react";

interface SendTroopsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetName: string;
  targetCoordinates: { x: number; y: number };
}

interface ArmyUnits {
  marines: number;
  pirates: number;
  cannons: number;
  ships: number;
}

const SendTroopsModal = ({ isOpen, onClose, targetName, targetCoordinates }: SendTroopsModalProps) => {
  const [troopsToSend, setTroopsToSend] = useState<ArmyUnits>({
    marines: 0,
    pirates: 0,
    cannons: 0,
    ships: 0
  });
  
  const [attackMode, setAttackMode] = useState<"attack" | "steal">("attack");

  // Mock available troops
  const availableTroops: ArmyUnits = {
    marines: 150,
    pirates: 200,
    cannons: 25,
    ships: 8
  };

  const unitIcons = {
    marines: Users,
    pirates: Sword,
    cannons: Target,
    ships: Ship
  };

  const unitNames = {
    marines: "Marines",
    pirates: "Pirates", 
    cannons: "Cannons",
    ships: "Ships"
  };

  const handleUnitChange = (unit: keyof ArmyUnits, value: string) => {
    const numValue = Math.max(0, Math.min(parseInt(value) || 0, availableTroops[unit]));
    setTroopsToSend(prev => ({
      ...prev,
      [unit]: numValue
    }));
  };

  const handleSend = () => {
    const totalTroops = Object.values(troopsToSend).reduce((sum, count) => sum + count, 0);
    
    if (totalTroops === 0) {
      alert("You must send at least one unit!");
      return;
    }

    console.log("Sending troops:", {
      target: targetName,
      coordinates: targetCoordinates,
      troops: troopsToSend,
      mode: attackMode
    });

    // Reset form and close modal
    setTroopsToSend({ marines: 0, pirates: 0, cannons: 0, ships: 0 });
    onClose();
  };

  const getTotalTroops = () => {
    return Object.values(troopsToSend).reduce((sum, count) => sum + count, 0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rope-border bg-parchment max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-pirata text-2xl text-primary flex items-center gap-2">
            <Send className="h-6 w-6" />
            Send Troops
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Target Info */}
          <Card className="border-wood-light">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-cinzel font-semibold text-lg">{targetName}</h3>
                  <p className="font-cinzel text-sm text-muted-foreground">
                    Coordinates: ({targetCoordinates.x}, {targetCoordinates.y})
                  </p>
                </div>
                <Badge variant="outline" className="font-cinzel">
                  Distance: {Math.abs(targetCoordinates.x) + Math.abs(targetCoordinates.y)} nautical miles
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Attack Mode Toggle */}
          <div className="flex items-center justify-between p-4 border border-wood-light rounded-lg">
            <div className="space-y-1">
              <Label className="font-cinzel font-semibold">Mission Type</Label>
              <p className="font-cinzel text-sm text-muted-foreground">
                {attackMode === "attack" 
                  ? "Full assault to conquer the target" 
                  : "Quick raid to steal resources"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="attack-mode" className="font-cinzel text-sm">
                  {attackMode === "attack" ? "Attack" : "Steal"}
                </Label>
                <Switch
                  id="attack-mode"
                  checked={attackMode === "steal"}
                  onCheckedChange={(checked) => setAttackMode(checked ? "steal" : "attack")}
                />
              </div>
            </div>
          </div>

          {/* Troop Selection */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-semibold">Select Troops to Send</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(availableTroops).map(([unit, available]) => {
                const Icon = unitIcons[unit as keyof ArmyUnits];
                const unitName = unitNames[unit as keyof ArmyUnits];
                
                return (
                  <div key={unit} className="p-4 border border-wood-light rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-cinzel font-semibold">{unitName}</span>
                      </div>
                      <Badge variant="outline" className="font-cinzel text-xs">
                        Available: {available}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={unit} className="font-cinzel text-sm">
                        Send Amount
                      </Label>
                      <Input
                        id={unit}
                        type="number"
                        min="0"
                        max={available}
                        value={troopsToSend[unit as keyof ArmyUnits]}
                        onChange={(e) => handleUnitChange(unit as keyof ArmyUnits, e.target.value)}
                        className="font-cinzel"
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="flex gap-1">
                      {[25, 50, 75, 100].map((percentage) => {
                        const amount = Math.floor((available * percentage) / 100);
                        return (
                          <Button
                            key={percentage}
                            variant="outline"
                            size="sm"
                            onClick={() => setTroopsToSend(prev => ({ ...prev, [unit]: amount }))}
                            className="flex-1 text-xs font-cinzel"
                          >
                            {percentage}%
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-cinzel font-semibold">Mission Summary</h4>
                  <p className="font-cinzel text-sm text-muted-foreground">
                    Total units: {getTotalTroops()}
                  </p>
                </div>
                <Badge className={`font-cinzel ${
                  attackMode === "attack" 
                    ? "bg-red-600 text-white" 
                    : "bg-yellow-600 text-white"
                }`}>
                  {attackMode === "attack" ? "Attack Mission" : "Steal Mission"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 font-cinzel border-wood-medium"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleSend}
              disabled={getTotalTroops() === 0}
              className="flex-1 bg-treasure text-wood-dark hover:bg-gold transition-bounce font-cinzel font-semibold"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Troops
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendTroopsModal;