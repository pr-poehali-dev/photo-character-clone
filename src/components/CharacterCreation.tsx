import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const CharacterCreation = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateCharacter = () => {
    setIsProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section id="create" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 border-teal-200">
            <Icon name="Palette" size={14} className="mr-1" />
            Создание Персонажа
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Превращай Фото в Персонажа
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Загрузи свою фотографию и создай уникального персонажа с настраиваемыми параметрами
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-dashed border-gray-200 hover:border-coral-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Upload" size={20} className="mr-2 text-coral-500" />
                  Загрузка Фотографии
                </CardTitle>
                <CardDescription>
                  Выбери фото с устройства или сделай новое с камеры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedPhoto ? (
                    <div className="relative">
                      <img 
                        src={uploadedPhoto} 
                        alt="Uploaded" 
                        className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="absolute top-2 right-2"
                        onClick={() => setUploadedPhoto(null)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                  ) : (
                    <div 
                      className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-coral-400 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Icon name="ImagePlus" size={48} className="text-gray-400 mb-2" />
                      <p className="text-gray-500 text-center">
                        Кликни для загрузки фото
                        <br />
                        <span className="text-sm">JPG, PNG до 10MB</span>
                      </p>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Icon name="FolderOpen" size={16} className="mr-2" />
                      С устройства
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Camera" size={16} className="mr-2" />
                      Камера
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Settings" size={20} className="mr-2 text-teal-500" />
                  Настройки Персонажа
                </CardTitle>
                <CardDescription>
                  Задай имя и описание для своего персонажа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Имя персонажа</label>
                  <Input 
                    placeholder="Введи имя персонажа"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Описание</label>
                  <Textarea 
                    placeholder="Опиши характер и особенности персонажа"
                    value={characterDescription}
                    onChange={(e) => setCharacterDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Стиль</label>
                  <Tabs defaultValue="cartoon" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="cartoon">Мультяшный</TabsTrigger>
                      <TabsTrigger value="realistic">Реалистичный</TabsTrigger>
                      <TabsTrigger value="anime">Аниме</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Создание персонажа...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                  onClick={handleCreateCharacter}
                  disabled={!uploadedPhoto || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Создаём...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={16} className="mr-2" />
                      Создать Персонажа
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterCreation;