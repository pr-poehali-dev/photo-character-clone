import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
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
    
    // Симуляция прогресса создания
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

  const galleryCharacters = [
    { id: 1, name: "Космический Герой", style: "Sci-Fi", color: "#FF6B6B" },
    { id: 2, name: "Волшебник", style: "Fantasy", color: "#4EDDC4" },
    { id: 3, name: "Киберпанк", style: "Futuristic", color: "#45B7D1" },
    { id: 4, name: "Мистик", style: "Dark", color: "#9B59B6" },
    { id: 5, name: "Воин", style: "Medieval", color: "#E67E22" },
    { id: 6, name: "Робот", style: "Tech", color: "#2ECC71" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral-500 to-teal-500 bg-clip-text text-transparent">
                PhotoCharacter
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-coral-500 transition-colors">Главная</a>
              <a href="#create" className="text-gray-600 hover:text-coral-500 transition-colors">Создание</a>
              <a href="#gallery" className="text-gray-600 hover:text-coral-500 transition-colors">Галерея</a>
              <a href="#guide" className="text-gray-600 hover:text-coral-500 transition-colors">Гайд</a>
              <a href="#profile" className="text-gray-600 hover:text-coral-500 transition-colors">Профиль</a>
              <a href="#contact" className="text-gray-600 hover:text-coral-500 transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-coral-100 to-teal-100 text-coral-700 border-coral-200">
              <Icon name="Zap" size={14} className="mr-1" />
              Новое поколение AI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral-500 via-teal-500 to-blue-500 bg-clip-text text-transparent leading-tight">
              Создавай Персонажей
              <br />
              <span className="relative">
                Из Фотографий
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-coral-400 to-teal-400 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Превращай обычные фотографии в уникальных цифровых персонажей с помощью передовых AI-технологий. 
              Создавай, кастомизируй и делись своими творениями!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-8 py-4 text-lg">
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить Фото
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-coral-200 text-coral-600 hover:bg-coral-50 px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть Демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Character Creation Section */}
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
              {/* Upload Section */}
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

              {/* Character Settings */}
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              <Icon name="Images" size={14} className="mr-1" />
              Галерея Работ
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Вдохновляйся Творениями
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Посмотри на удивительных персонажей, созданных нашим сообществом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryCharacters.map((character) => (
              <Card key={character.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div 
                    className="h-48 bg-gradient-to-br opacity-20"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${character.color}22, ${character.color}44)` 
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                      <AvatarFallback 
                        className="text-2xl font-bold text-white"
                        style={{ backgroundColor: character.color }}
                      >
                        {character.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Badge 
                    className="absolute top-3 right-3 text-white border-white/30"
                    style={{ backgroundColor: character.color }}
                  >
                    {character.style}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{character.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Стиль: {character.style} • Создан сегодня
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Eye" size={14} className="mr-1" />
                      Просмотр
                    </Button>
                    <Button size="sm" className="flex-1" style={{ backgroundColor: character.color }}>
                      <Icon name="Heart" size={14} className="mr-1" />
                      Лайк
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50">
              <Icon name="Grid3X3" size={16} className="mr-2" />
              Показать Больше
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-200">
              <Icon name="BookOpen" size={14} className="mr-1" />
              Как Пользоваться
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Простые Шаги к Результату
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Следуй этим простым шагам и создавай потрясающих персонажей за минуты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Загрузи Фото",
                  description: "Выбери качественную фотографию с хорошим освещением. Лучше всего подходят портретные снимки.",
                  icon: "Upload",
                  color: "coral"
                },
                {
                  step: "02", 
                  title: "Настрой Стиль",
                  description: "Выбери стиль персонажа: мультяшный, реалистичный или аниме. Добавь имя и описание.",
                  icon: "Palette",
                  color: "teal"
                },
                {
                  step: "03",
                  title: "Получи Результат",
                  description: "Наш AI создаст уникального персонажа. Сохрани, поделись или создай ещё одного!",
                  icon: "Sparkles",
                  color: "blue"
                }
              ].map((item, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 rounded-bl-3xl flex items-start justify-end p-2`}>
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon name={item.icon as any} size={24} className={`text-${item.color}-600`} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg border">
                <Icon name="Clock" size={20} className="text-green-500" />
                <span className="text-gray-700">Среднее время создания: <strong>30 секунд</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                <Icon name="User" size={14} className="mr-1" />
                Личный Кабинет
              </Badge>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Управляй Своим Профилем
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-2xl">
                      П
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>Профиль Пользователя</CardTitle>
                  <CardDescription>Твои статистика и достижения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Персонажей создано:</span>
                    <span className="font-bold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Лайков получено:</span>
                    <span className="font-bold">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дата регистрации:</span>
                    <span className="font-bold">Сегодня</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                </CardContent>
              </Card>

              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Мои Персонажи</CardTitle>
                    <CardDescription>Все созданные тобой персонажи</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <Icon name="ImageOff" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Пока нет созданных персонажей</p>
                      <p className="text-sm">Создай своего первого персонажа выше!</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Избранное</CardTitle>
                    <CardDescription>Персонажи, которые тебе понравились</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Icon name="Heart" size={32} className="mx-auto mb-2 opacity-50" />
                      <p>Пока нет избранных персонажей</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Icon name="MessageSquare" size={14} className="mr-1" />
                Обратная Связь
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Есть Вопросы?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Мы всегда готовы помочь! Напиши нам, и мы ответим в течение 24 часов.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Отправить Сообщение</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Твоё имя" className="bg-white/5 border-white/20 text-white placeholder:text-gray-400" />
                  <Input placeholder="Email" type="email" className="bg-white/5 border-white/20 text-white placeholder:text-gray-400" />
                  <Textarea placeholder="Сообщение" rows={4} className="bg-white/5 border-white/20 text-white placeholder:text-gray-400" />
                  <Button className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">support@photocharacter.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telegram</h3>
                    <p className="text-gray-300">@photocharacter_support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Время работы</h3>
                    <p className="text-gray-300">24/7 автоответчик<br />Личные ответы: 9:00-18:00 МСК</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">PhotoCharacter</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Создавай уникальных персонажей из фотографий с помощью AI
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Создание персонажей</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Галерея</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Icon name="Github" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PhotoCharacter. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;