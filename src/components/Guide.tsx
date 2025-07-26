import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Guide = () => {
  return (
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
  );
};

export default Guide;