import React from 'react';
import MobileHeader from '../../components/layout/MobileHeader';
import MobileContent from '../../components/layout/MobileContent';
import BottomNavigation from '../../components/layout/BottomNavigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Define an interface for the dummy card items
interface DummyCardItem {
  id: string;
  title: string;
  description: string;
  content: string;
}

// Dummy data for cards to display in MobileContent
const cardItems: DummyCardItem[] = [
  { id: '1', title: 'Feature Spotlight', description: 'Discover our latest updates.', content: 'Explore new tools and functionalities designed to enhance your experience. We are constantly working to improve our app.' },
  { id: '2', title: 'Upcoming Events', description: 'Join our community gatherings.', content: 'Check out the schedule for webinars, Q&A sessions, and local meetups. Connect with other users and our team.' },
  { id: '3', title: 'Tips & Tricks', description: 'Get the most out of our app.', content: 'Learn useful shortcuts and hidden features to boost your productivity and streamline your workflow.' },
  { id: '4', title: 'User Story', description: 'Success with Our Platform', content: 'Read about how one of our users leveraged our platform to achieve their goals. Inspiring stories from our community.' },
  { id: '5', title: 'System Maintenance', description: 'Scheduled Downtime Notice', content: 'Please be aware of a scheduled maintenance window on Sunday from 2 AM to 4 AM. Service might be temporarily unavailable.' },
  { id: '6', title: 'New Integration', description: 'Connect with Your Favorite Tools', content: 'We are excited to announce a new integration with XYZ service, making your workflow even more seamless.' },
  { id: '7', title: 'Community Highlights', description: 'See what users are saying.', content: 'A collection of positive feedback and interesting discussions from our community forums and social media.' },
  { id: '8', title: 'Quick Start Guide', description: 'New to the app? Start here!', content: 'A step-by-step guide to get you familiar with the core features and functionalities of our application quickly.' },
];

const IndexPage: React.FC = () => {
  const handleMenuClick = () => {
    console.log('Menu clicked');
    // Example: In a real app, this might open a sidebar drawer.
    // e.g., setSidebarOpen(true);
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
    // Example: In a real app, this might navigate to a search page or open a search modal.
    // e.g., navigate('/search');
  };

  const handleNotificationsClick = () => {
    console.log('Notifications clicked');
    // Example: In a real app, this might open a notifications panel.
    // e.g., setNotificationsPanelOpen(true);
  };

  const handleNavigation = (href: string) => {
    console.log(`Navigating to: ${href}`);
    // In a real application, you would use react-router-dom's useNavigate hook or Link components for navigation.
    // For example: `const navigate = useNavigate(); navigate(href);` (if using react-router-dom)
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <MobileHeader
        title="Mobile Overview" // As per Project Info: targetPage
        onMenuClick={handleMenuClick}
        onSearchClick={handleSearchClick}
        onNotificationsClick={handleNotificationsClick}
      />
      <MobileContent>
        {/* 
          The MobileContent component internally handles padding to avoid overlap 
          with the fixed MobileHeader and BottomNavigation (if hasFixedBottomNav is true, which is default).
          The inner div of MobileContent has px-4 py-4.
        */}
        <div className="space-y-4">
          {cardItems.map((item) => (
            <Card key={item.id} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.content}</p>
                <Button variant="link" className="p-0 h-auto mt-3 text-sm text-primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </MobileContent>
      <BottomNavigation 
        onNavigate={handleNavigation} 
        initialActiveItemId="home" // Sets 'Home' as the default active tab in BottomNavigation
      />
    </div>
  );
};

export default IndexPage;
