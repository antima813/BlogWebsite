import { Link } from "react-router-dom";

function Categories() {
  const categoryData = [
    {
      id: 1,
      title: "Technology",
      icon: "💻",
      desc: "Latest articles on web development, AI and programming."
    },
    {
      id: 2,
      title: "Travel",
      icon: "✈️",
      desc: "Beautiful destinations and unforgettable journeys."
    },
    {
      id: 3,
      title: "Lifestyle",
      icon: "🌿",
      desc: "Healthy habits, productivity and mindful living."
    },
    {
      id: 4,
      title: "Food",
      icon: "🍽️",
      desc: "Recipes, restaurants and delicious food stories."
    }
  ];

  return (
    <section className="categories">

      <div className="container">

        <div className="section-title">
          <span>OUR CATEGORIES</span>

          <h2>Browse by Topic</h2>

          <p>
            Explore your favorite category and discover
            amazing stories written by our authors.
          </p>
        </div>

        <div className="category-grid">

          {categoryData.map((item) => (

            <div className="category-card" key={item.id}>

              <div className="category-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <Link to="/blogs">
                Explore →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;