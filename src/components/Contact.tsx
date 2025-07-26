import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
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
  );
};

export default Contact;