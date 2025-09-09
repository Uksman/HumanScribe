import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Copy, RotateCcw, Wand2, Zap, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const tones = [
  { value: 'casual', label: 'Casual', icon: '😊', description: 'Friendly and relaxed' },
  { value: 'professional', label: 'Professional', icon: '💼', description: 'Business-appropriate' },
  { value: 'creative', label: 'Creative', icon: '🎨', description: 'Imaginative and engaging' },
  { value: 'enthusiastic', label: 'Enthusiastic', icon: '🔥', description: 'Energetic and exciting' },
  { value: 'conversational', label: 'Conversational', icon: '💬', description: 'Natural dialogue style' },
  { value: 'humorous', label: 'Humorous', icon: '😄', description: 'Light and funny' },
];

const examples = [
  {
    input: "The individual is required to complete the assigned tasks by the specified deadline to ensure optimal performance and productivity.",
    output: "Hey, you've got to wrap up those tasks by the deadline to keep things running smoothly!",
    tone: "casual"
  },
  {
    input: "This product provides a multitude of benefits, including enhanced efficiency and superior quality.",
    output: "This product's a game-changer! It boosts efficiency and delivers top-notch quality.",
    tone: "enthusiastic"
  },
  {
    input: "Our organization implements comprehensive strategies to achieve maximum operational effectiveness.",
    output: "We use smart strategies to run our business as effectively as possible.",
    tone: "professional"
  }
];

export const ContentHumanizer = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedTone, setSelectedTone] = useState('casual');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleHumanize = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some AI-generated text to humanize.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock transformation based on tone
    const selectedToneData = tones.find(t => t.value === selectedTone);
    const mockOutput = mockHumanizeText(inputText, selectedTone);
    
    setOutputText(mockOutput);
    setIsProcessing(false);
    
    toast({
      title: "✨ Text humanized!",
      description: `Applied ${selectedToneData?.label} tone successfully.`,
    });
  };

  const mockHumanizeText = (text: string, tone: string): string => {
    // Simple mock transformation - in real app this would call the ML model
    let humanized = text;
    
    switch (tone) {
      case 'casual':
        humanized = text
          .replace(/individual/g, 'person')
          .replace(/is required to/g, 'needs to')
          .replace(/assigned tasks/g, 'tasks')
          .replace(/specified deadline/g, 'deadline')
          .replace(/ensure optimal/g, 'keep things')
          .replace(/productivity/g, 'running smoothly');
        break;
      case 'enthusiastic':
        humanized = text
          .replace(/provides/g, 'delivers')
          .replace(/multitude of benefits/g, 'amazing benefits')
          .replace(/enhanced efficiency/g, 'boosted efficiency')
          .replace(/superior quality/g, 'top-notch quality');
        if (!humanized.includes('!')) humanized += '!';
        break;
      case 'professional':
        humanized = text
          .replace(/comprehensive strategies/g, 'smart strategies')
          .replace(/maximum operational effectiveness/g, 'the best results possible')
          .replace(/implements/g, 'uses');
        break;
      default:
        // Add contractions and casual language
        humanized = text
          .replace(/you are/g, "you're")
          .replace(/it is/g, "it's")
          .replace(/will not/g, "won't")
          .replace(/cannot/g, "can't");
    }
    
    return humanized;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard.",
    });
  };

  const loadExample = (example: typeof examples[0]) => {
    setInputText(example.input);
    setSelectedTone(example.tone);
    setOutputText('');
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-glow animate-float">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            AI Content Humanizer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform AI-generated text into natural, engaging content that feels authentically human
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Texts Humanized</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Human-like Score</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Tone Options</div>
            </div>
          </div>
        </div>

        {/* Example Transformations */}
        <Card className="p-6 mb-8 shadow-card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Quick Examples
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="p-4 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => loadExample(example)}
              >
                <Badge variant="secondary" className="mb-2 capitalize">
                  {example.tone}
                </Badge>
                <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {example.input}
                </div>
                <div className="text-xs font-medium line-clamp-2">
                  {example.output}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary" />
                AI-Generated Text
              </h3>
              <Badge variant="outline">Input</Badge>
            </div>
            <Textarea
              placeholder="Paste your AI-generated text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[300px] resize-none"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-xs text-muted-foreground">
                {inputText.length} characters
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setInputText('')}
                disabled={!inputText}
              >
                <RotateCcw className="h-4 w-4" />
                Clear
              </Button>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Humanized Text
              </h3>
              <Badge variant="outline">Output</Badge>
            </div>
            <div className="min-h-[300px] p-4 bg-muted rounded-md">
              {outputText ? (
                <div className="whitespace-pre-wrap text-sm">{outputText}</div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Your humanized text will appear here
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-xs text-muted-foreground">
                {outputText.length} characters
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(outputText)}
                disabled={!outputText}
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </div>
          </Card>
        </div>

        {/* Controls */}
        <Card className="p-6 mt-6 shadow-card">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Select Tone</label>
              <Select value={selectedTone} onValueChange={setSelectedTone}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((tone) => (
                    <SelectItem key={tone.value} value={tone.value}>
                      <div className="flex items-center gap-2">
                        <span>{tone.icon}</span>
                        <span>{tone.label}</span>
                        <span className="text-xs text-muted-foreground">
                          - {tone.description}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button
              variant="hero"
              size="xl"
              onClick={handleHumanize}
              disabled={isProcessing || !inputText.trim()}
              className="w-full lg:w-auto"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Humanizing...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Humanize Text
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};