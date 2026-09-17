window.TRIP_DATA = {
  startDate: "2026-10-30",
  endDate: "2026-11-08",
  days: [
    {
      date: "2026-10-30", city: "Pekín", cityCn: "北京", label: "Llegada a China", weather: "Día suave",
      items: [
        { time: "11:55", title: "Llegada a Pekín", cn: "北京首都国际机场", detail: "Inmigración, equipaje, activar eSIM y sacar algo de efectivo.", tag: "Llegada", map: "北京首都国际机场" },
        { time: "14:30", title: "Traslado y check-in", cn: "速8酒店", detail: "DiDi o Airport Express + metro según el equipaje. Enseña el nombre chino del hotel.", tag: "Transporte", map: "速8酒店 北京" },
        { time: "18:00", title: "Primer paseo tranquilo", cn: "王府井步行街", detail: "Wangfujing, cena temprana y descanso para ajustar el horario.", tag: "Paseo", map: "王府井步行街" }
      ]
    },
    {
      date: "2026-10-31", city: "Pekín", cityCn: "北京", label: "El Pekín imperial",
      items: [
        { time: "07:30", title: "Plaza de Tiananmén", cn: "天安门广场", detail: "Llega pronto. Pasaporte y reserva gratuita preparados para los controles.", tag: "Reserva", map: "天安门广场", booking: "tiananmen" },
        { time: "09:00", title: "Ciudad Prohibida", cn: "故宫博物院", detail: "Recorrido de sur a norte. Compra la entrada oficial al abrirse la venta siete días antes.", tag: "3–4 h", map: "故宫博物院", booking: "forbidden-city" },
        { time: "14:00", title: "Parque Jingshan", cn: "景山公园", detail: "Subida corta para la mejor panorámica de la Ciudad Prohibida. Entrada sencilla en taquilla.", tag: "Mirador", map: "景山公园", booking: "jingshan" },
        { time: "17:00", title: "Hutongs y lago Houhai", cn: "什刹海", detail: "Paseo sin prisas por Shichahai y cena por la zona.", tag: "Noche", map: "什刹海" }
      ]
    },
    {
      date: "2026-11-01", city: "Pekín", cityCn: "北京", label: "Templo del Cielo y Palacio de Verano",
      items: [
        { time: "07:30", title: "Templo del Cielo", cn: "天坛公园", detail: "Ve temprano para ver la vida local y compra el billete combinado, no solo la entrada al parque.", tag: "2–3 h", map: "天坛公园", booking: "temple-heaven" },
        { time: "11:00", title: "Traslado y comida", cn: "天坛公园 → 颐和园", detail: "El Palacio de Verano queda lejos: para ahorrar tiempo, usa DiDi y come algo sencillo durante el trayecto.", tag: "≈50–70 min", map: "颐和园东宫门" },
        { time: "13:00", title: "Palacio de Verano", cn: "颐和园", detail: "Entra por la Puerta Este y compra el billete combinado. El domingo están abiertos los recintos que cierran los lunes.", tag: "3–4 h", map: "颐和园东宫门", booking: "summer-palace" },
        { time: "18:30", title: "Regreso y cena", cn: "什刹海", detail: "Vuelve al centro en metro o DiDi y cena por Shichahai o cerca del hotel.", tag: "Flexible", map: "什刹海" }
      ]
    },
    {
      date: "2026-11-02", city: "Pekín", cityCn: "北京", label: "Gran Muralla de Mutianyu",
      items: [
        { time: "07:00", title: "DiDi hasta Dongzhimen", cn: "东直门地铁站", detail: "El MUBUS sale a las 08:00. Llega al punto de encuentro antes de las 07:40 y lleva el pasaporte.", tag: "Traslado", map: "东直门地铁站" },
        { time: "08:00", title: "MUBUS hacia Mutianyu", cn: "慕巴士 · 慕田峪长城", detail: "La mejor relación entre precio y comodidad: bus directo, entrada y shuttle interno incluidos.", tag: "Reserva", map: "慕田峪长城", booking: "mutianyu" },
        { time: "09:30", title: "Gran Muralla", cn: "慕田峪长城", detail: "Elige teleférico para mejores vistas o telesilla y tobogán para una visita más divertida.", tag: "4–5 h", map: "慕田峪长城", booking: "mutianyu" },
        { time: "17:00", title: "Regreso y última cena", cn: "簋街", detail: "Vuelta a Dongzhimen, cena por Guijie y prepara el equipaje para el tren del día siguiente.", tag: "Flexible", map: "簋街" }
      ]
    },
    {
      date: "2026-11-03", city: "Xi'an", cityCn: "西安", label: "Tren y muralla iluminada",
      items: [
        { time: "Mañana", title: "Tren rápido a Xi'an", cn: "北京西站 → 西安北站", detail: "Salida desde Beijing West. Llega 45–60 min antes con pasaporte y comida.", tag: "≈4,5–6 h", map: "北京西站", booking: "train-beijing-xian" },
        { time: "Tarde", title: "Check-in en Ramada", cn: "西安华美达酒店", detail: "Metro desde Xi'an North hacia Zhonglou; confirma la dirección exacta en la reserva.", tag: "Hotel", map: "钟楼 西安" },
        { time: "18:00", title: "Muralla de Xi'an", cn: "西安城墙", detail: "Sube por la puerta sur y disfruta del encendido de las luces. No necesita excursión organizada.", tag: "Atardecer", map: "西安城墙 永宁门", booking: "xian-wall" },
        { time: "20:00", title: "Barrio musulmán", cn: "回民街", detail: "Cena callejera junto a Torre del Tambor. Prueba roujiamo y biangbiang noodles.", tag: "Cena", map: "回民街" }
      ]
    },
    {
      date: "2026-11-04", city: "Xi'an", cityCn: "西安", label: "Guerreros de Terracota",
      items: [
        { time: "07:30", title: "Salida a los Guerreros", cn: "秦始皇帝陵博物院", detail: "Reserva un grupo pequeño con recogida céntrica, entrada incluida y sin paradas comerciales.", tag: "1–1,5 h", map: "秦始皇帝陵博物院", booking: "terracotta" },
        { time: "09:00", title: "Museo de Terracota", cn: "秦始皇兵马俑博物馆", detail: "Empieza por el foso 3 y termina en el espectacular foso 1. Aquí sí compensa llevar guía.", tag: "3–4 h", map: "秦始皇兵马俑博物馆", booking: "terracotta" },
        { time: "17:00", title: "Pagoda y Xi'an Joy City", cn: "大雁塔 · 西安大悦城", detail: "Paseo por Datang Everbright City al caer la noche. Joy City queda al lado: buen momento para ver Li-Ning, Anta, Huawei o Xiaomi sin desviaros.", tag: "Noche + tiendas", map: "西安大悦城" }
      ]
    },
    {
      date: "2026-11-05", city: "Shanghái", cityCn: "上海", label: "Llegada al Bund",
      items: [
        { time: "Mañana", title: "Tren a Shanghái", cn: "西安北站 → 上海虹桥站", detail: "Escoge un G directo de hasta 6 h 30 si aparece. El vuelo solo compensa si llega a Hongqiao y el precio final con maleta es bueno.", tag: "≈6–7,5 h", map: "西安北站", booking: "xian-shanghai" },
        { time: "Tarde", title: "Check-in Jinjiang Inn", cn: "锦江之星(上海人民广场淮海东路店)", detail: "No. 293 Yunnan South Road, junto a Dashijie. Guarda la dirección china sin conexión.", tag: "Hotel", map: "锦江之星 上海人民广场淮海东路店" },
        { time: "19:00", title: "El Bund de noche", cn: "外滩", detail: "Primera vista del skyline de Pudong. Camina desde Nanjing East Road.", tag: "Imprescindible", map: "外滩" }
      ]
    },
    {
      date: "2026-11-06", city: "Shanghái", cityCn: "上海", label: "Casco antiguo y futurismo",
      items: [
        { time: "08:30", title: "Jardín Yuyuan", cn: "豫园", detail: "Entra a primera hora y recorre después las calles del casco antiguo.", tag: "2–3 h", map: "豫园", booking: "yu-garden" },
        { time: "11:30", title: "South Bund Fabric Market", cn: "南外滩轻纺面料市场", detail: "Id el primer día de Shanghái si queréis ropa a medida: elegir tejido, negociar el precio final y exigir fecha de prueba y recogida por escrito.", tag: "Compras · prioridad", map: "南外滩轻纺面料市场" },
        { time: "15:00", title: "Concesión Francesa", cn: "武康路", detail: "Wukang Road, antiguas villas y cafés. Ideal para caminar sin prisa.", tag: "Paseo", map: "武康路" },
        { time: "18:30", title: "Pudong y mirador", cn: "陆家嘴", detail: "Cruza a Lujiazui. Reserva Shanghai Tower solo si la visibilidad es buena.", tag: "Atardecer", map: "陆家嘴", booking: "shanghai-tower" },
        { time: "20:30", title: "Crucero por el Huangpu", cn: "黄浦江游览", detail: "Opcional, pero muy recomendable para ver iluminados el Bund y Pudong. Elige el recorrido estándar sin cena.", tag: "45–60 min", map: "十六铺码头", booking: "huangpu-cruise" }
      ]
    },
    {
      date: "2026-11-07", city: "Shanghái", cityCn: "上海", label: "Excursión o compras",
      items: [
        { time: "08:00", title: "Opción A: Zhujiajiao", cn: "朱家角古镇", detail: "Pueblo de canales accesible en metro. No hace falta excursión; paga la barca allí si os apetece.", tag: "Medio día", map: "朱家角古镇", booking: "zhujiajiao" },
        { time: "10:00", title: "Opción B: día urbano", cn: "上海博物馆", detail: "Museo, People’s Square y barrios que os hayan quedado pendientes. La entrada es gratuita, pero revisa la reserva.", tag: "Alternativa", map: "上海博物馆", booking: "shanghai-museum" },
        { time: "17:00", title: "Compras finales", cn: "静安大悦城 · 南京东路", detail: "Para móvil, id a una tienda oficial y comprad con margen para configurarlo. Para ropa, Nanjing East Road reúne marcas chinas y grandes tiendas.", tag: "Compras", map: "静安大悦城" }
      ]
    },
    {
      date: "2026-11-08", city: "Shanghái", cityCn: "上海", label: "Último día y regreso",
      items: [
        { time: "Mañana", title: "Último paseo y recogidas", cn: "上海", detail: "Plan corto cerca del hotel y recogida de cualquier prenda encargada. No dejes compras importantes para hoy.", tag: "Flexible", map: "上海" },
        { time: "Según vuelo", title: "Traslado al aeropuerto", cn: "上海浦东国际机场", detail: "Comprueba terminal y tiempo de viaje. Para vuelo internacional, llega unas 3 horas antes.", tag: "Regreso", map: "上海浦东国际机场" }
      ]
    }
  ],
  hotels: [
    { city: "Pekín", cn: "北京", name: "Super 8 · Art Museum Back Street", dates: "30 oct — 3 nov", map: "速8酒店 北京南锣鼓巷美术馆后街店" },
    { city: "Xi'an", cn: "西安", name: "Ramada Bell Tower", dates: "3 — 5 nov", map: "西安钟楼华美达酒店" },
    { city: "Shanghái", cn: "上海", name: "Jinjiang Inn · East Huaihai Road", dates: "5 — 8 nov", map: "锦江之星 上海人民广场淮海东路店" }
  ],
  bookings: [
    {
      id: "tiananmen", city: "Pekín", cityCn: "北京", date: "31 oct · 07:30", title: "Plaza de Tiananmén", cn: "天安门广场",
      level: "essential", label: "OFICIAL · GRATIS", price: "0 CNY", provider: "Reserva oficial de Tiananmén",
      recommendation: "Haz la reserva gratuita con los dos pasaportes. No pagues a una agencia solo por tramitar el acceso.",
      timing: "Revisar y reservar en cuanto se abra la semana previa.",
      transfer: "Desde el Super 8: DiDi temprano o metro. Cuenta con controles de seguridad y llega unos 45 minutos antes.",
      primary: { label: "Canales oficiales", url: "https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260325_4566110.html" },
      map: "天安门广场"
    },
    {
      id: "forbidden-city", city: "Pekín", cityCn: "北京", date: "31 oct · 09:00", title: "Ciudad Prohibida", cn: "故宫博物院",
      level: "essential", label: "RESERVA CRÍTICA", price: "60 CNY + opcionales", provider: "Palace Museum · canal oficial",
      recommendation: "Compra la entrada general y añade Treasure Gallery por 10 CNY. La Gallery of Clocks es opcional.",
      timing: "Venta el 24 oct a las 20:00 en Pekín · 14:00 en España. Se agota con rapidez.",
      transfer: "Acceso por Meridian Gate, continuando a pie desde Tiananmén. Lleva el pasaporte original usado en la reserva.",
      primary: { label: "Reservar en Palace Museum", url: "https://bookingticket.dpm.org.cn/" },
      alternate: { label: "Email oficial de reservas", url: "mailto:bookingticket@dpm.org.cn" },
      map: "故宫博物院 午门"
    },
    {
      id: "jingshan", city: "Pekín", cityCn: "北京", date: "31 oct · 14:00", title: "Parque Jingshan", cn: "景山公园",
      level: "onsite", label: "EN TAQUILLA", price: "≈2 CNY", provider: "Compra directa en la entrada",
      recommendation: "No hace falta intermediario ni reserva anticipada. Entra por la puerta sur al salir de la Ciudad Prohibida.",
      timing: "Comprar allí el mismo día.",
      transfer: "Desde la salida norte de la Ciudad Prohibida son pocos minutos andando.",
      map: "景山公园南门"
    },
    {
      id: "temple-heaven", city: "Pekín", cityCn: "北京", date: "1 nov · 07:30", title: "Templo del Cielo", cn: "天坛公园",
      level: "recommended", label: "OFICIAL O TRIP", price: "28 CNY combinado", provider: "Visiting Beijing Parks / taquilla",
      recommendation: "Compra el billete combinado de temporada baja: incluye Hall of Prayer, Echo Wall y Circular Mound.",
      timing: "Reserva durante la semana previa; el 1 de noviembre comienza la temporada baja.",
      transfer: "Llega por la Puerta Este. Después, un DiDi al Palacio de Verano ahorra casi una hora frente al metro.",
      primary: { label: "Información y canal oficial", url: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/" },
      alternate: { label: "Guía de reserva con pasaporte", url: "https://www.trip.com/guide/attraction/book-china-attraction-tickets-with-passport.html" },
      map: "天坛公园东门"
    },
    {
      id: "summer-palace", city: "Pekín", cityCn: "北京", date: "1 nov · 13:00", title: "Palacio de Verano", cn: "颐和园",
      level: "recommended", label: "BILLETE COMBINADO", price: "50 CNY", provider: "Cuenta oficial Summer Palace",
      recommendation: "Reserva el combinado de temporada baja. Incluye los recintos interiores, que están abiertos el domingo y cierran los lunes.",
      timing: "Disponible hasta siete días antes. Reservar alrededor del 25 de octubre.",
      transfer: "DiDi desde el Templo del Cielo hasta East Palace Gate; regreso al centro en metro línea 4 o DiDi.",
      primary: { label: "Web oficial", url: "https://www.summerpalace.net.cn/en/" },
      alternate: { label: "Reserva sencilla en Klook", url: "https://www.klook.com/en-US/activity/12698-summer-palace-yiheyuan-admission-ticket-beijing/" },
      map: "颐和园东宫门"
    },
    {
      id: "mutianyu", city: "Pekín", cityCn: "北京", date: "2 nov · 08:00", title: "Mutianyu con MUBUS", cn: "慕田峪长城",
      level: "essential", label: "MEJOR OPCIÓN", price: "180 CNY + 140 CNY", provider: "MUBUS · Beijing Botrip Tour Holiday",
      recommendation: "El paquete de 180 CNY incluye bus directo, entrada, shuttle interno y guía en el trayecto. La web oficial ofrece guía en inglés; Trip.com anuncia también opción en español.",
      timing: "Se puede reservar ya. Elige salida de las 08:00 y opción sin compras ni Palacio de Verano.",
      transfer: "No tiene recogida en hotel: DiDi a Dongzhimen sobre las 07:00 y presentación antes de las 07:40.",
      primary: { label: "Reservar MUBUS oficial", url: "https://www.beijingmubus.com/?page_id=15703" },
      alternate: { label: "MUBUS en Trip.com", url: "https://www.trip.com/things-to-do/detail/89362507/" },
      map: "东直门地铁站"
    },
    {
      id: "train-beijing-xian", city: "Xi'an", cityCn: "西安", date: "3 nov · mañana", title: "Tren Pekín → Xi'an", cn: "北京西站 → 西安北站",
      level: "essential", label: "15 DÍAS ANTES", price: "≈480–593 CNY", provider: "China Railway / Trip.com",
      recommendation: "Escoge un G directo desde Beijing West, preferiblemente entre 07:00 y 08:30 y de menos de 4 h 45.",
      timing: "La venta suele abrir 15 días antes, alrededor del 20 de octubre. Reserva segunda clase.",
      transfer: "Super 8 → Beijing West: metro o DiDi. Xi'an North → Ramada Bell Tower: línea 2 directa a Zhonglou.",
      primary: { label: "Buscar en Trip.com", url: "https://www.trip.com/trains/china/route/beijing-to-xian/" },
      alternate: { label: "12306 oficial", url: "https://www.12306.cn/en/index.html" },
      map: "北京西站"
    },
    {
      id: "xian-wall", city: "Xi'an", cityCn: "西安", date: "3 nov · 18:00", title: "Muralla de Xi'an", cn: "西安城墙",
      level: "onsite", label: "SIN EXCURSIÓN", price: "54 CNY + bicicleta", provider: "Taquilla o Trip.com",
      recommendation: "Compra entrada para South Gate. La bicicleta se alquila arriba; no merece la pena contratar guía ni traslado.",
      timing: "Puede comprarse el mismo día; online si quieres llevarlo cerrado.",
      transfer: "Desde Ramada: línea 2 de Zhonglou a Yongningmen o unos 20 minutos caminando.",
      primary: { label: "Entrada en Trip.com", url: "https://us.trip.com/travel-guide/attraction/xi-an/xi-an-city-wall-75686/" },
      map: "西安城墙 永宁门"
    },
    {
      id: "terracotta", city: "Xi'an", cityCn: "西安", date: "4 nov · 07:30", title: "Guerreros de Terracota", cn: "秦始皇帝陵博物院",
      level: "essential", label: "TOUR CON GUÍA", price: "Desde 42,59 US$ pp", provider: "Klook · grupo de hasta 16 personas",
      recommendation: "Elige ‘Small Group Tour: Hotel Pickup & Drop-off Within the 2nd Ring Road’. Incluye guía en inglés y evita fábricas y paradas comerciales.",
      timing: "Reserva dos o tres semanas antes con cancelación. Evita extras de VR, jade o Huaqing Palace.",
      transfer: "El Ramada Bell Tower está dentro del segundo anillo: añade la dirección exacta y exige confirmación de recogida. Regreso sobre las 13:30–14:30.",
      primary: { label: "Tour pequeño en Klook", url: "https://www.klook.com/activity/162120-terracotta-warriors-mini-group-or-private-tour/" },
      alternate: { label: "Entrada oficial sin tour", url: "https://www.bmy.com.cn/jingtai/bmyweb/ticketing.html" },
      map: "秦始皇帝陵博物院"
    },
    {
      id: "xian-shanghai", city: "Shanghái", cityCn: "上海", date: "5 nov · mañana", title: "Xi'an → Shanghái", cn: "西安北站 → 上海虹桥站",
      level: "essential", label: "COMPARAR", price: "Tren ≈652–795 CNY", provider: "Trip.com / China Railway",
      recommendation: "Prioridad: G directo de hasta 6 h 30. Cambia a avión solo si llega a Hongqiao, incluye maleta y cuesta como máximo unos 120 € por persona.",
      timing: "Trenes alrededor del 22 de octubre. Los vuelos ya están publicados, pero compara el importe final con equipaje.",
      transfer: "Shanghai Hongqiao → Jinjiang Inn: línea 2 hasta People's Square y línea 8 hasta Dashijie.",
      primary: { label: "Trenes Xi'an–Shanghái", url: "https://www.trip.com/trains/china/route/xian-to-shanghai/" },
      alternate: { label: "Comparar vuelos a SHA", url: "https://www.trip.com/chinaflights/ShowFareFirst?dcity=sia&acity=sha&ddate=2026-11-05&triptype=ow&class=y&quantity=2&searchboxArg=t" },
      map: "西安北站"
    },
    {
      id: "yu-garden", city: "Shanghái", cityCn: "上海", date: "6 nov · 08:30", title: "Jardín Yuyuan", cn: "豫园",
      level: "recommended", label: "ENTRADA SIMPLE", price: "≈40 CNY", provider: "Klook o taquilla oficial",
      recommendation: "Compra solo la entrada al jardín. No necesitas guía, traslado ni un tour del casco antiguo.",
      timing: "Reserva pocos días antes o compra en la puerta si sigue habiendo disponibilidad.",
      transfer: "Desde el Jinjiang Inn está cerca: paseo de unos 20 minutos o una parada en metro desde Dashijie.",
      primary: { label: "Entrada en Klook", url: "https://www.klook.com/en-GB/activity/16738-yu-garden-admission-ticket-shanghai/" },
      alternate: { label: "Web oficial del jardín", url: "https://www.yugarden.com.cn/" },
      map: "豫园"
    },
    {
      id: "shanghai-tower", city: "Shanghái", cityCn: "上海", date: "6 nov · 18:30", title: "Shanghai Tower", cn: "上海中心大厦",
      level: "weather", label: "SEGÚN VISIBILIDAD", price: "≈180 CNY", provider: "Klook / Trip.com",
      recommendation: "No la cierres ahora. Reserva 48–72 horas antes únicamente si la previsión promete buena visibilidad.",
      timing: "Elegir una franja alrededor del atardecer; confirmar la hora exacta cuando sepamos el tiempo.",
      transfer: "Metro línea 2 hasta Lujiazui. Después puedes volver al Bund en ferry o enlazar con el crucero nocturno.",
      primary: { label: "Entrada en Klook", url: "https://www.klook.com/en-US/activity/4333-shanghai-tower-observation-deck-shanghai/" },
      alternate: { label: "Comparar en Trip.com", url: "https://us.trip.com/travel-guide/attraction/shanghai/shanghai-tower-24591219/" },
      map: "上海中心大厦"
    },
    {
      id: "huangpu-cruise", city: "Shanghái", cityCn: "上海", date: "6 nov · noche", title: "Crucero nocturno del Huangpu", cn: "黄浦江游览",
      level: "recommended", label: "OPCIONAL RECOMENDADO", price: "≈120–150 CNY", provider: "Trip.com · Shiliupu Pier",
      recommendation: "Escoge el crucero estándar de 45–60 minutos. Evita cena, VIP y traslados: encarecen mucho sin mejorar las vistas.",
      timing: "Reservar dos o tres días antes para una salida entre 19:00 y 20:30.",
      transfer: "Embarque en Shiliupu Pier. Confirma el muelle exacto en el bono y llega 30 minutos antes con pasaporte.",
      primary: { label: "Comparar cruceros", url: "https://www.trip.com/travel-guide/attraction/shanghai/huangpu-river-cruise-98472/" },
      map: "十六铺码头"
    },
    {
      id: "zhujiajiao", city: "Shanghái", cityCn: "上海", date: "7 nov · opción A", title: "Zhujiajiao por libre", cn: "朱家角古镇",
      level: "onsite", label: "NO RESERVAR TOUR", price: "Pueblo gratis · barca aparte", provider: "Metro + compra local",
      recommendation: "La excursión organizada no compensa para vosotros. Id en metro y comprad allí una barca si os apetece.",
      timing: "Sin reserva; salid temprano para llegar antes que los grupos.",
      transfer: "Metro hasta Zhujiajiao, línea 17. Desde la estación hay paseo o bus corto hasta el casco antiguo.",
      map: "朱家角古镇"
    },
    {
      id: "shanghai-museum", city: "Shanghái", cityCn: "上海", date: "7 nov · opción B", title: "Shanghai Museum", cn: "上海博物馆",
      level: "recommended", label: "GRATIS · REVISAR CUPO", price: "0 CNY", provider: "Shanghai Museum oficial",
      recommendation: "Si elegís el día urbano, comprobad la sede y reservad con pasaporte. No paguéis a intermediarios.",
      timing: "Revisar la disponibilidad durante la semana previa.",
      transfer: "La sede de People's Square está cerca del hotel; Shanghai Museum East queda en Pudong. Confirma cuál contiene las exposiciones deseadas.",
      primary: { label: "Web oficial del museo", url: "https://www.shanghaimuseum.net/" },
      map: "上海博物馆 人民广场"
    }
  ],
  shopping: [
    {
      city: "Pekín", cityCn: "北京", strategy: "Mirar y comparar. Aprovechad Wangfujing el día de llegada; no cargaría todavía con una compra grande.",
      places: [
        { name: "Wangfujing + Beijing apm", cn: "王府井步行街 · 北京apm", type: "Ropa · marcas", priority: "En ruta", detail: "Zona cómoda para probar Li-Ning, Anta, 361°, Bosideng y otras marcas, además de tiendas oficiales de electrónica. Precios fijos y compra sencilla.", bestFor: "Ropa deportiva, zapatillas y primera comparación de precios.", map: "北京apm" },
        { name: "Silk Street", cn: "秀水街", type: "Mercado · regateo", priority: "Opcional", detail: "Mercado turístico con ropa, bolsos, recuerdos y sastrería. Compara calidades, revisa costuras y negocia siempre el precio total antes de pagar.", bestFor: "Ropa económica, recuerdos y curiosear imitaciones.", map: "秀水街" },
        { name: "Taikoo Li Sanlitun", cn: "三里屯太古里", type: "Moda · streetwear", priority: "Recomendado", detail: "Centro comercial abierto con tiendas de moda, deporte y marcas chinas contemporáneas. Mejor experiencia que los mercados si buscáis producto original.", bestFor: "Streetwear, deportivas y marcas locales originales.", map: "三里屯太古里" },
        { name: "Zhongguancun + Xiaomi Home", cn: "中关村 · 小米之家", type: "Móviles · tecnología", priority: "Comparar", detail: "Zona tecnológica para ver modelos y precios. Compra el móvil solo en Xiaomi Home, Huawei u otra tienda oficial; evita puestos independientes por ahorrar un poco más.", bestFor: "Probar móviles, relojes, auriculares y comparar el precio chino.", map: "小米之家 中关村" }
      ]
    },
    {
      city: "Xi'an", cityCn: "西安", strategy: "Compras fáciles ligadas al recorrido. Solo compraría el móvil aquí si aparece una promoción oficial claramente mejor.",
      places: [
        { name: "Xi'an Joy City", cn: "西安大悦城", type: "Ropa · tecnología", priority: "En ruta", detail: "Está junto a la Pagoda del Gran Ganso y encaja el 4 de noviembre. Centro moderno con moda, deporte, restauración y tiendas oficiales de electrónica.", bestFor: "Li-Ning, Anta, ropa casual china y Xiaomi/Huawei.", map: "西安大悦城" },
        { name: "Xi'an SKP", cn: "西安SKP", type: "Moda · premium", priority: "Opcional", detail: "Junto a la Puerta Sur de la muralla. Es práctico para verlo el día de llegada, aunque está orientado a moda y cosmética de gama media-alta.", bestFor: "Marcas premium, moda y un centro comercial cuidado.", map: "西安SKP" },
        { name: "Kangfu Road", cn: "康复路服装批发市场", type: "Ropa · mayorista", priority: "Solo con tiempo", detail: "Zona de mercados mayoristas con precios bajos y muchísima oferta. Es menos cómoda y exige revisar talla y calidad; no sacrificaría Terracota o la muralla por ir.", bestFor: "Ropa económica y accesorios si os gusta buscar gangas.", map: "康复路服装批发市场" }
      ]
    },
    {
      city: "Shanghái", cityCn: "上海", strategy: "Ciudad principal de compras. Haced los encargos el día 6 y comprad el móvil el 7 para poder probarlo antes de volar.",
      places: [
        { name: "South Bund Fabric Market", cn: "南外滩轻纺面料市场", type: "Ropa a medida", priority: "Prioridad alta", detail: "Tres plantas de sastres y tejidos. Id el día 6, llevad fotos o una prenda de referencia y acordad tejido, forro, ajustes, precio y recogida por escrito.", bestFor: "Camisas, pantalones, chaquetas, abrigos y vestidos a medida.", map: "南外滩轻纺面料市场" },
        { name: "Jing'an Joy City + Xiaomi Home", cn: "静安大悦城 · 小米之家", type: "Móviles · tecnología", priority: "Mejor opción", detail: "Centro moderno y fácil para comprar en una tienda oficial. Pedid factura y confirmad el número exacto de modelo antes de abrir o activar el teléfono.", bestFor: "Xiaomi, wearables, auriculares y accesorios con procedencia clara.", map: "小米之家 静安大悦城" },
        { name: "Nanjing East Road", cn: "南京东路步行街", type: "Ropa · marcas", priority: "En ruta", detail: "Gran eje comercial cerca de vuestro alojamiento y del Bund. Buen sitio para comparar marcas chinas originales y entrar en flagships de Huawei, Li-Ning o Anta.", bestFor: "Ropa, zapatillas, móviles y compras de última hora.", map: "南京东路步行街" },
        { name: "AP Plaza", cn: "亚太盛汇旅游购物广场", type: "Mercado · regateo", priority: "Opcional", detail: "Mercado subterráneo en la estación Shanghai Science & Technology Museum. Hay ropa, bolsos, recuerdos y gadgets; revisad todo y no compréis aquí el móvil principal.", bestFor: "Curiosear, regalos, ropa económica e imitaciones negociadas.", map: "亚太盛汇旅游购物广场" },
        { name: "Xujiahui: Metro City + Buynow", cn: "徐家汇 · 美罗城 · 百脑汇", type: "Tecnología · gaming", priority: "Recomendado", detail: "Zona útil para periféricos, accesorios, gaming, fotografía y electrónica. Para productos caros, elegid tiendas de marca o distribuidores autorizados.", bestFor: "Teclados, audio, cámaras, accesorios y gadgets.", map: "百脑汇 上海徐汇店" },
        { name: "Bailian ZX Creative Center", cn: "百联ZX创趣场", type: "Gaming · figuras", priority: "Opcional", detail: "Centro centrado en anime, figuras, coleccionismo y cultura gaming, directamente en Nanjing East Road.", bestFor: "Figuras, maquetas, merchandising y regalos diferentes.", map: "百联ZX创趣场" }
      ]
    }
  ],
  checklist: [
    { title: "Documentación", items: ["Pasaportes vigentes", "Seguro descargado", "Reservas de hoteles offline", "Billetes de tren y vuelos", "Fotocopias y copias en la nube"] },
    { title: "Móvil y pagos", items: ["Alipay verificado", "WeChat Pay configurado", "eSIM instalada", "VPN instalada y probada", "Amap, DiDi, 12306 y traductor", "Mapas y chino offline"] },
    { title: "Reservas clave", items: ["Ciudad Prohibida", "Tiananmén", "Mutianyu / transporte", "Guerreros de Terracota", "Trenes Pekín–Xi'an–Shanghái"] },
    { title: "Equipaje", items: ["Adaptador y batería externa", "Calzado cómodo", "Capas para frío y lluvia", "Medicinas habituales", "Mochila plegable / espacio para compras"] },
    { title: "Compras", items: ["Lista de precios máximos en España", "Foto del modelo y precio antes de comprar", "Móvil: comprobar ROM, bandas, eSIM y Android Auto", "Pedir factura y preguntar por Tax Free", "Guardar embalaje y probar todo antes del vuelo"] }
  ]
};
