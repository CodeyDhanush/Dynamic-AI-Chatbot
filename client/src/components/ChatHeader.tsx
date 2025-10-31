import { Button } from "@/components/ui/button";
import { Download, Trash2, Settings } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ChatHeaderProps {
  title: string;
  onExport?: () => void;
  onClear?: () => void;
  onSettings?: () => void;
}

export function ChatHeader({ title, onExport, onClear, onSettings }: ChatHeaderProps) {
  return (
    <div className="border-b bg-background/80 backdrop-blur-xl sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold" data-testid="text-chat-title">
          {title}
        </h1>
        <div className="flex items-center gap-1">
          {onExport && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onExport}
              data-testid="button-export"
              aria-label="Export conversation"
            >
              <Download className="h-4 w-4" />
            </Button>
          )}
          {onSettings && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onSettings}
              data-testid="button-settings"
              aria-label="Settings"
            >
              <Settings className="h-4 w-4" />
            </Button>
          )}
          {onClear && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="button-clear"
                  aria-label="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear Conversation?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all messages in this conversation. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel data-testid="button-cancel-clear">Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onClear} data-testid="button-confirm-clear">
                    Clear
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
}
