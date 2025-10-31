import { ChatHeader } from '../ChatHeader';

export default function ChatHeaderExample() {
  return (
    <ChatHeader
      title="AI Assistant"
      onExport={() => console.log('Export triggered')}
      onClear={() => console.log('Clear triggered')}
      onSettings={() => console.log('Settings triggered')}
    />
  );
}
