import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import PageTransition from '@/components/layout/PageTransition';
import VideoIntro from '@/components/VideoIntro';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Facilities from '@/pages/Facilities';
import Results from '@/pages/Results';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

// Show the intro once per browser session
const INTRO_KEY = 'yss_intro_seen';
const alreadySeen = sessionStorage.getItem(INTRO_KEY) === '1';

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/results" component={Results} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(alreadySeen);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_KEY, '1');
    setIntroDone(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!introDone && <VideoIntro onComplete={handleIntroComplete} />}
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
