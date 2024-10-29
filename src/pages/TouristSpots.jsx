import Card from '../components/card/Card'
import React from 'react'



function TouristSpots() {
  return (
    <>
      <div className='mt-8 mb-16'>
      <h1 className="text-4xl font-bold text-third mb-8">ATTRACTION NEARBY</h1>
      </div>
      <div className='flex justify-evenly flex-wrap'>
        <Card images={"/images/taj.png"} title="Agara" desc = "The Taj Mahal in Agra, India, is a white marble mausoleum built by Emperor Shah Jahan in 1653 in memory of his wife, Mumtaz Mahal. Renowned for its beauty and symmetry, it symbolizes eternal love and blends Islamic, Persian, and Indian architectural styles. A UNESCO World Heritage Site, it attracts millions of visitors each year." />
        <Card images={"/images/varansi.png"} title="Varansi" desc = "Varanasi, also known as Banaras or Kashi, is one of India’s oldest and most sacred cities, located on the banks of the Ganges River in Uttar Pradesh. Known for its ghats, temples, and vibrant cultural heritage, it’s a major pilgrimage site, especially for Hindus. Varanasi is famous for its evening Ganga Aarti and as a center of learning, spirituality, and traditional arts." />
        <Card images={"/images/prayagraj.png"} title="Prayagraj" desc = "Prayagraj, also known as the City of Sangam, is where the Ganges, Yamuna, and mythical Saraswati rivers meet. It’s a major Hindu pilgrimage site, famous for hosting the Kumbh Mela and home to ancient temples and the historic Allahabad Fort." />
        <Card images={"/images/chitrakoot.png"} title="Chitrakoot" desc = "Chitrakoot, on the Uttar Pradesh-Madhya Pradesh border, is a sacred town linked to the Ramayana, where Lord Rama, Sita, and Lakshmana are believed to have spent part of their exile. It's known for holy sites like Ramghat and Kamadgiri Hill, drawing many pilgrims." />
        <Card images={"/images/vrindavan.png"} title="Vrindavan" desc = "Vrindavan, in Uttar Pradesh, India, is a sacred town known for its association with Lord Krishna's childhood. Filled with temples like the Banke Bihari and ISKCON Temple, it’s a major pilgrimage site for devotees, especially during festivals like Janmashtami and Holi." />
        <Card images={"/images/ayodhya.png"} title="Ayodhya" desc = "Ayodhya, in Uttar Pradesh, India, is an ancient city revered as the birthplace of Lord Rama in Hindu tradition. It’s home to numerous temples, including the famous Ram Janmabhoomi temple, and is a major pilgrimage destination, especially celebrated during festivals like Diwali and Ram Navami." />
        <Card images={"/images/sarnath.png"} title="Sarnath" desc = "Sarnath, near Varanasi in Uttar Pradesh, India, is a revered Buddhist site where Gautama Buddha delivered his first sermon after attaining enlightenment. It’s home to the Dhamek Stupa, ancient monasteries, and the Ashoka Pillar, making it a significant pilgrimage and historical destination." />
        <Card images={"/images/prayagraj.png"} title="Doodhwa National Park" desc = "Dudhwa National Park, located in Uttar Pradesh, India, is a protected area known for its rich biodiversity and dense forests. It houses endangered species like the Bengal tiger, Indian rhinoceros, and swamp deer, as well as a variety of bird species. Part of the larger Dudhwa Tiger Reserve, the park attracts wildlife enthusiasts and nature lovers." />
      </div>
    </>
  )
}

export default TouristSpots
