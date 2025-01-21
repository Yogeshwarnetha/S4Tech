import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactItem({ icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-red-600">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactItem
        icon={<MapPin size={24} />}
        title="Location"
        content="4901 Whisper Drive Parker, TX 75002"
      />
      <ContactItem
        icon={<Phone size={24} />}
        title="Phone"
        content="+1 (309) 660-3261"
      />
      <ContactItem
        icon={<Mail size={24} />}
        title="Email"
        content="info@s4tech.com"
      />
      <ContactItem
        icon={<Clock size={24} />}
        title="Business Hours"
        content="Mon - Fri: 9:00 AM - 6:00 PM"
      />
    </div>
  );
}