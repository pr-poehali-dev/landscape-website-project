import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [calculatorValues, setCalculatorValues] = useState({
    area: [100],
    complexity: [2],
    features: [] as string[]
  });

  const services = [
    {
      icon: 'TreePine',
      title: 'Проектирование садов',
      description: 'Создание уникальных садовых композиций с учетом ландшафта и ваших предпочтений'
    },
    {
      icon: 'Flower2',
      title: 'Озеленение территории',
      description: 'Подбор растений, создание газонов, цветников и декоративных насаждений'
    },
    {
      icon: 'Waves',
      title: 'Водные элементы',
      description: 'Проектирование и установка фонтанов, прудов, водопадов и ручьев'
    },
    {
      icon: 'Lightbulb',
      title: 'Садовое освещение',
      description: 'Создание атмосферного освещения для вечернего отдыха в саду'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Zen Garden Retreat',
      description: 'Минималистичный японский сад с элементами медитативного пространства',
      image: '/img/3aa2c598-e61d-4de1-bde8-7701d9e1edd5.jpg',
      tags: ['Японский стиль', 'Минимализм', 'Водные элементы']
    },
    {
      title: 'English Country Garden',
      description: 'Классический английский сад с пышными цветниками и живыми изгородями',
      image: '/img/fcd4e65f-9a1c-4416-953e-c63974e12b68.jpg',
      tags: ['Английский стиль', 'Цветники', 'Живые изгороди']
    },
    {
      title: 'Modern Eco Landscape',
      description: 'Современный экологический дизайн с использованием местных растений',
      image: '/img/d1f61df5-2104-4224-9dc2-27f5e0b706ed.jpg',
      tags: ['Эко-дизайн', 'Местные растения', 'Современный стиль']
    }
  ];

  const calculateCost = () => {
    const baseCost = calculatorValues.area[0] * 2000;
    const complexityMultiplier = 1 + (calculatorValues.complexity[0] - 1) * 0.5;
    const featuresMultiplier = 1 + calculatorValues.features.length * 0.3;
    
    return Math.round(baseCost * complexityMultiplier * featuresMultiplier);
  };

  const toggleFeature = (feature: string) => {
    setCalculatorValues(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-nature-light/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="TreePine" className="text-nature-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-nature-primary">GreenSpace</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-nature-primary hover:text-nature-secondary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-nature-primary hover:text-nature-secondary transition-colors">Портфолио</a>
            <a href="#about" className="text-nature-primary hover:text-nature-secondary transition-colors">О дизайнере</a>
            <a href="#calculator" className="text-nature-primary hover:text-nature-secondary transition-colors">Калькулятор</a>
            <a href="#contact" className="text-nature-primary hover:text-nature-secondary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-nature-primary mb-6">
            Создаем природные пространства вашей мечты
          </h1>
          <p className="text-xl text-nature-primary/80 mb-8 leading-relaxed">
            Профессиональное ландшафтное проектирование с 15-летним опытом. 
            Превращаем любую территорию в гармоничное природное пространство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nature-secondary hover:bg-nature-primary text-white px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
            <Button variant="outline" size="lg" className="border-nature-secondary text-nature-secondary hover:bg-nature-secondary hover:text-white px-8 py-3">
              <Icon name="Eye" className="mr-2" size={20} />
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-primary mb-4">Услуги</h2>
            <p className="text-lg text-nature-primary/70 max-w-2xl mx-auto">
              Полный спектр услуг ландшафтного дизайна от проектирования до реализации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-nature-light hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-nature-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-nature-secondary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-heading text-nature-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-nature-primary/70 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-primary mb-4">Портфолио</h2>
            <p className="text-lg text-nature-primary/70 max-w-2xl mx-auto">
              Избранные проекты, воплощенные с любовью к природе и вниманием к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-nature-light/30 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/90 text-nature-primary text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-nature-primary mb-2">{project.title}</h3>
                  <p className="text-nature-primary/70 leading-relaxed">{project.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-nature-secondary hover:text-nature-primary">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-nature-primary mb-8">О дизайнере</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-nature-light/50 rounded-full mx-auto max-w-sm relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nature-secondary/20 to-nature-primary/20" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-heading font-semibold text-nature-primary mb-4">Анна Садовникова</h3>
                <p className="text-nature-primary/80 leading-relaxed mb-4">
                  15 лет создаю уникальные ландшафтные решения, сочетая профессиональный подход 
                  с глубокой любовью к природе. Специализируюсь на создании гармоничных пространств, 
                  которые радуют глаз и дарят покой душе.
                </p>
                <p className="text-nature-primary/80 leading-relaxed mb-6">
                  Образование: МГУ им. Ломоносова, факультет почвоведения; 
                  курсы ландшафтного дизайна в Англии и Японии.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="outline" className="border-nature-secondary text-nature-secondary">150+ проектов</Badge>
                  <Badge variant="outline" className="border-nature-secondary text-nature-secondary">15 лет опыта</Badge>
                  <Badge variant="outline" className="border-nature-secondary text-nature-secondary">Международные награды</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-nature-primary mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-lg text-nature-primary/70">
                Получите предварительную стоимость ландшафтного проекта
              </p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold text-nature-primary mb-3 block">
                      Площадь участка: {calculatorValues.area[0]} м²
                    </Label>
                    <Slider
                      value={calculatorValues.area}
                      onValueChange={(value) => setCalculatorValues(prev => ({...prev, area: value}))}
                      max={1000}
                      min={50}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold text-nature-primary mb-3 block">
                      Сложность проекта: {['Простой', 'Средний', 'Сложный', 'Премиум'][calculatorValues.complexity[0] - 1]}
                    </Label>
                    <Slider
                      value={calculatorValues.complexity}
                      onValueChange={(value) => setCalculatorValues(prev => ({...prev, complexity: value}))}
                      max={4}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold text-nature-primary mb-3 block">
                      Дополнительные элементы:
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Водные элементы', 'Освещение', 'Беседка', 'Дорожки', 'Автополив', 'Декор'].map((feature) => (
                        <Button
                          key={feature}
                          variant={calculatorValues.features.includes(feature) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleFeature(feature)}
                          className={calculatorValues.features.includes(feature) 
                            ? "bg-nature-secondary text-white" 
                            : "border-nature-secondary text-nature-secondary hover:bg-nature-secondary hover:text-white"
                          }
                        >
                          {feature}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-nature-light/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-heading font-bold text-nature-primary mb-4">
                    Предварительная стоимость
                  </h3>
                  <div className="text-4xl font-bold text-nature-secondary mb-4">
                    {calculateCost().toLocaleString('ru-RU')} ₽
                  </div>
                  <p className="text-sm text-nature-primary/70 mb-6">
                    *Окончательная стоимость определяется после выезда специалиста на участок
                  </p>
                  <Button className="w-full bg-nature-secondary hover:bg-nature-primary text-white">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать выезд специалиста
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-nature-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-primary mb-4">Процесс работы</h2>
            <p className="text-lg text-nature-primary/70 max-w-2xl mx-auto">
              Простой и понятный процесс от идеи до воплощения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Консультация', desc: 'Обсуждаем ваши идеи и пожелания, выезжаем на участок' },
              { step: '02', title: 'Проектирование', desc: 'Создаем 3D-проект и подбираем растения' },
              { step: '03', title: 'Реализация', desc: 'Воплощаем проект в жизнь с командой мастеров' },
              { step: '04', title: 'Поддержка', desc: 'Консультируем по уходу и обслуживанию сада' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-nature-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-nature-primary mb-3">{item.title}</h3>
                <p className="text-nature-primary/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-nature-primary mb-4">Контакты</h2>
              <p className="text-lg text-nature-primary/70">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-nature-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-primary mb-1">Телефон</h3>
                    <p className="text-nature-primary/80">+7 (495) 123-45-67</p>
                    <p className="text-nature-primary/80">+7 (985) 987-65-43</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-nature-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-primary mb-1">Email</h3>
                    <p className="text-nature-primary/80">info@greenspace-design.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-nature-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-primary mb-1">Адрес</h3>
                    <p className="text-nature-primary/80">г. Москва, ул. Садовая, д. 15</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-nature-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-primary mb-1">Режим работы</h3>
                    <p className="text-nature-primary/80">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-nature-primary/80">Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold text-nature-primary mb-4">
                  Оставить заявку
                </h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-nature-primary">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="border-nature-light focus:border-nature-secondary" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-nature-primary">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" className="border-nature-light focus:border-nature-secondary" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-nature-primary">Сообщение</Label>
                    <Input id="message" placeholder="Расскажите о вашем проекте..." className="border-nature-light focus:border-nature-secondary" />
                  </div>
                  <Button className="w-full bg-nature-secondary hover:bg-nature-primary text-white">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="TreePine" size={32} />
              <span className="text-2xl font-heading font-bold">GreenSpace</span>
            </div>
            <p className="text-white/80 mb-6">
              Создаем природные пространства, которые вдохновляют и восстанавливают силы
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
            <div className="border-t border-white/20 mt-8 pt-6 text-sm text-white/60">
              © 2024 GreenSpace Design. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}