import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;