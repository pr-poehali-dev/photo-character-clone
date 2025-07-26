import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
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
  );
};

export default Hero;