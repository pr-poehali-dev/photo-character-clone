import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const galleryCharacters = [
    { id: 1, name: "Космический Герой", style: "Sci-Fi", color: "#FF6B6B" },
    { id: 2, name: "Волшебник", style: "Fantasy", color: "#4EDDC4" },
    { id: 3, name: "Киберпанк", style: "Futuristic", color: "#45B7D1" },
    { id: 4, name: "Мистик", style: "Dark", color: "#9B59B6" },
    { id: 5, name: "Воин", style: "Medieval", color: "#E67E22" },
    { id: 6, name: "Робот", style: "Tech", color: "#2ECC71" }
  ];

  return (
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
  );
};

export default Gallery;