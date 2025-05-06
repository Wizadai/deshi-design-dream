
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You're on the early access list. We'll be in touch soon!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-indic-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Early Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join the waitlist to be among the first to experience AI that truly speaks your language.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-indic-orange hover:bg-indic-orange/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Early Access"}
              </Button>
            </div>
          </form>
          
          <p className="mt-4 text-sm text-muted-foreground text-center">
            We'll never share your email with anyone else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
