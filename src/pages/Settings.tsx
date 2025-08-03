import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Settings as SettingsIcon, 
  Volume2,
  Bell,
  Shield,
  Palette,
  Globe,
  User,
  Anchor,
  Save
} from "lucide-react";

const Settings = () => {
  const settingsCategories = [
    {
      title: "Account",
      icon: User,
      settings: [
        { id: "profile", label: "Public Profile", description: "Make your profile visible to other pirates", type: "switch", value: true },
        { id: "email", label: "Email Notifications", description: "Receive game updates via email", type: "switch", value: false },
        { id: "newsletter", label: "Newsletter", description: "Subscribe to One Piece game news", type: "switch", value: true },
      ]
    },
    {
      title: "Audio",
      icon: Volume2,
      settings: [
        { id: "music", label: "Background Music", description: "Play One Piece themed background music", type: "switch", value: true },
        { id: "sfx", label: "Sound Effects", description: "Battle and interaction sounds", type: "switch", value: true },
        { id: "voice", label: "Voice Acting", description: "Character voice lines", type: "switch", value: false },
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        { id: "battle", label: "Battle Alerts", description: "Get notified when battles are ready", type: "switch", value: true },
        { id: "crew", label: "Crew Updates", description: "Training and recruitment notifications", type: "switch", value: true },
        { id: "treasure", label: "Treasure Found", description: "Notifications when treasure is discovered", type: "switch", value: true },
        { id: "events", label: "Special Events", description: "Limited time events and challenges", type: "switch", value: false },
      ]
    },
    {
      title: "Gameplay",
      icon: Anchor,
      settings: [
        { id: "auto-battle", label: "Auto Battle", description: "Automatically engage in battles", type: "switch", value: false },
        { id: "quick-travel", label: "Quick Travel", description: "Skip sailing animations", type: "switch", value: true },
        { id: "hints", label: "Show Hints", description: "Display helpful gameplay tips", type: "switch", value: true },
        { id: "confirmations", label: "Confirm Actions", description: "Ask before important decisions", type: "switch", value: true },
      ]
    },
    {
      title: "Privacy",
      icon: Shield,
      settings: [
        { id: "analytics", label: "Analytics", description: "Help improve the game with usage data", type: "switch", value: true },
        { id: "location", label: "Share Location", description: "Show your position to crew members", type: "switch", value: false },
        { id: "online-status", label: "Online Status", description: "Show when you're online", type: "switch", value: true },
      ]
    },
    {
      title: "Display",
      icon: Palette,
      settings: [
        { id: "animations", label: "Animations", description: "Enable smooth transitions and effects", type: "switch", value: true },
        { id: "high-quality", label: "High Quality Graphics", description: "Better visuals (may affect performance)", type: "switch", value: false },
        { id: "show-fps", label: "Show FPS", description: "Display frame rate counter", type: "switch", value: false },
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Ship Settings
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Customize your adventure experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {settingsCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
                <category.icon className="h-5 w-5" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {category.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-start justify-between space-x-4">
                    <div className="flex-1">
                      <Label htmlFor={setting.id} className="font-cinzel font-medium text-foreground">
                        {setting.label}
                      </Label>
                      <p className="text-sm font-cinzel text-muted-foreground mt-1">
                        {setting.description}
                      </p>
                    </div>
                    <Switch
                      id={setting.id}
                      defaultChecked={setting.value}
                      className="data-[state=checked]:bg-treasure"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Game Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
              <Globe className="h-5 w-5" />
              Game Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="font-cinzel text-sm">Version:</span>
              <span className="font-cinzel text-sm font-semibold">1.2.3</span>
            </div>
            <div className="flex justify-between">
              <span className="font-cinzel text-sm">Server:</span>
              <span className="font-cinzel text-sm font-semibold">Grand Line</span>
            </div>
            <div className="flex justify-between">
              <span className="font-cinzel text-sm">Region:</span>
              <span className="font-cinzel text-sm font-semibold">East Blue</span>
            </div>
            <div className="flex justify-between">
              <span className="font-cinzel text-sm">Last Update:</span>
              <span className="font-cinzel text-sm font-semibold">2024-01-15</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rope-border bg-parchment shadow-treasure">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-pirata text-xl text-primary">
              <Anchor className="h-5 w-5" />
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white">
              Contact Support
            </Button>
            <Button variant="outline" className="w-full border-treasure text-treasure hover:bg-treasure hover:text-white">
              Report Bug
            </Button>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
              Feedback
            </Button>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              Game Manual
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Save Settings */}
      <div className="text-center">
        <Button className="bg-treasure text-wood-dark hover:bg-gold transition-bounce px-8">
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;