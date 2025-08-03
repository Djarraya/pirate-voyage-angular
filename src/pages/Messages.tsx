import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Mail,
  MailOpen,
  AlertTriangle,
  Info,
  Gift,
  Skull,
  Crown,
  Users
} from "lucide-react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      from: "World Government",
      subject: "Bounty Update",
      preview: "Your bounty has been updated to ฿1,500,000,000",
      type: "warning",
      isRead: false,
      time: "2 hours ago",
      icon: Crown
    },
    {
      id: 2,
      from: "Red Hair Shanks",
      subject: "Welcome to the New World",
      preview: "Congratulations on making it this far, Luffy...",
      type: "message",
      isRead: false,
      time: "1 day ago",
      icon: Users
    },
    {
      id: 3,
      from: "Marine HQ",
      subject: "Wanted: Dead or Alive",
      preview: "Admiral Akainu has issued a special order...",
      type: "alert",
      isRead: true,
      time: "3 days ago",
      icon: Skull
    },
    {
      id: 4,
      from: "Treasure Island",
      subject: "Daily Reward",
      preview: "You have unclaimed treasure waiting for you!",
      type: "reward",
      isRead: false,
      time: "5 hours ago",
      icon: Gift
    },
    {
      id: 5,
      from: "Nami",
      subject: "Navigation Update",
      preview: "I've plotted our course to the next island...",
      type: "info",
      isRead: true,
      time: "1 week ago",
      icon: Info
    },
    {
      id: 6,
      from: "Roronoa Zoro",
      subject: "Training Complete",
      preview: "My three-sword style training is finally complete!",
      type: "message",
      isRead: true,
      time: "2 weeks ago",
      icon: Users
    },
    {
      id: 7,
      from: "Going Merry",
      subject: "Ship Maintenance",
      preview: "Your ship requires immediate attention...",
      type: "alert",
      isRead: false,
      time: "3 hours ago",
      icon: AlertTriangle
    },
    {
      id: 8,
      from: "Sanji",
      subject: "Kitchen Supplies",
      preview: "We need to restock our food supplies at the next port",
      type: "info",
      isRead: true,
      time: "4 days ago",
      icon: Info
    }
  ];

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case "warning": return AlertTriangle;
      case "alert": return Skull;
      case "reward": return Gift;
      case "info": return Info;
      default: return MessageSquare;
    }
  };

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case "warning": return "border-l-yellow-500 bg-yellow-50";
      case "alert": return "border-l-red-500 bg-red-50";
      case "reward": return "border-l-green-500 bg-green-50";
      case "info": return "border-l-blue-500 bg-blue-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "warning": return "bg-yellow-500";
      case "alert": return "bg-red-500";
      case "reward": return "bg-green-500";
      case "info": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Messages
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Stay connected with your crew and the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Message Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-primary">
                <Mail className="h-5 w-5" />
                Inbox Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-cinzel text-sm">Total Messages:</span>
                  <Badge variant="outline">{messages.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-cinzel text-sm">Unread:</span>
                  <Badge className="bg-accent">{unreadCount}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-cinzel text-sm">Alerts:</span>
                  <Badge className="bg-red-500">
                    {messages.filter(m => m.type === "alert").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-cinzel text-sm">Rewards:</span>
                  <Badge className="bg-green-500">
                    {messages.filter(m => m.type === "reward").length}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rope-border bg-parchment shadow-treasure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-lg text-primary">
                <Users className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-ocean text-white hover:bg-ocean-light transition-bounce">
                Mark All Read
              </Button>
              <Button variant="outline" className="w-full border-treasure text-treasure hover:bg-treasure hover:text-white">
                Compose Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Messages List */}
        <div className="lg:col-span-3">
          <Card className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
                <MessageSquare className="h-6 w-6" />
                Inbox
                {unreadCount > 0 && (
                  <Badge className="bg-accent ml-2">{unreadCount} new</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => {
                  const IconComponent = getMessageTypeIcon(message.type);
                  
                  return (
                    <div
                      key={message.id}
                      className={`flex items-start gap-4 p-4 border-l-4 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        getMessageTypeColor(message.type)
                      } ${!message.isRead ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    >
                      {/* Avatar */}
                      <Avatar className="w-12 h-12 border-2 border-gold">
                        <AvatarFallback className="bg-ocean text-white">
                          {message.from.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>

                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-cinzel font-semibold text-sm ${
                            !message.isRead ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {message.from}
                          </h3>
                          <Badge className={getBadgeColor(message.type)}>
                            {message.type}
                          </Badge>
                          {!message.isRead && (
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                          )}
                        </div>
                        
                        <h4 className={`font-cinzel font-medium text-sm mb-1 ${
                          !message.isRead ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {message.subject}
                        </h4>
                        
                        <p className="font-cinzel text-xs text-muted-foreground truncate">
                          {message.preview}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-cinzel text-xs text-muted-foreground">
                            {message.time}
                          </span>
                          <div className="flex items-center gap-1">
                            <IconComponent className="h-3 w-3 text-muted-foreground" />
                            {!message.isRead ? (
                              <Mail className="h-3 w-3 text-accent" />
                            ) : (
                              <MailOpen className="h-3 w-3 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;