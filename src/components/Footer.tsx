import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;