import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Profile = () => {
  return (
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
  );
};

export default Profile;