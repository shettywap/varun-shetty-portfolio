import './Articles.css'

export default function Articles() {
  const articles = [
    {
      title: 'Predictable Prospects - The Best Metrics to Evaluate the NFL Draft',
      featured: true,
      date: 'March 23, 2026',
      category: 'Data Science',
      excerpt: 'Exploring the best statistical metrics to evaluate NFL draft prospects.',
      link: 'https://medium.com/@shetty.varun/predictable-prospects-the-best-metrics-to-evaluate-the-nfl-draft-5c6af8bc585a',
      tags: ['Draft Strategy', 'Analytics']
    },
    {
      title: 'The Structural Divide: How Situational Tendencies Shaped NFL Success and Struggles',
      featured: false,
      date: 'March 2, 2026',
      category: 'Sports Analytics',
      excerpt: 'An analysis of how offensive schemes from coaches like Klint Kubiak, Josh McDaniels, and Sean McVay influenced 2025 NFL Playoff outcomes.',
      link: 'https://medium.com/@shetty.varun/the-structural-divide-how-situational-tendencies-shaped-nfl-success-and-struggles-2ace7bf4e0d9',
      tags: ['Coaching/Strategy', 'Financial/Team Structure']
    },
    {
      title: 'Optimistic Offseason Overhauls for the Titans, Raiders, and more',
      featured: false,
      date: 'February 15, 2026',
      category: 'Sports Analytics',
      excerpt: 'Can these franchises capitalize on cap space, coaching changes, and draft capital to turn their teams around?',
      link: 'https://medium.com/@shetty.varun/optimistic-offseason-overhauls-for-the-titans-raiders-and-more-4b1e7bda84e8',
      tags: ['Financial/Team Structure']
    },
    {
      title: 'Strip Sacks, Spin Moves, and Scrambles — Standout Plays from the 101st Shrine Bowl',
      featured: false,
      date: 'January 28, 2026',
      category: 'Sports Analysis',
      excerpt: 'A detailed overview of the best players from the Shrine Bowl with curated clips of standout plays.',
      link: 'https://medium.com/@shetty.varun/strip-sacks-spin-moves-and-scrambles-standout-plays-and-players-from-the-101st-shrine-bowl-b1569ed22c24',
      tags: ['Film Analysis']
    },
    {
      title: '2026 First Round Mock Draft',
      featured: false,
      date: 'April 16, 2026',
      category: 'Sports Analytics',
      excerpt: 'An in-depth analysis of top prospects and predictions for the first round of the 2026 NFL Draft.',
      link: 'https://medium.com/@shetty.varun/2026-first-round-mock-draft-97b1bb55bf97',
      tags: ['Position Value', 'Draft Strategy']
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Sports Analytics': '#FF6B6B',
      'Data Science': '#4ECDC4',
      'Sports Analysis': '#FFB347',
      'AI/ML': '#FFA07A',
      'Football': '#98D8C8',
      'NFL': '#F7DC6F'
    }
    return colors[category] || '#6C5CE7'
  }

  const featuredArticle = articles.find((article) => article.featured)
  const remainingArticles = articles.filter((article) => !article.featured)

  return (
    <section id="articles" className="articles">
      <div className="section-header">
        <span className="section-eyebrow">Writing</span>
        <h2>Articles</h2>
      </div>

      {featuredArticle && (
        <div className="featured-article">
          <div className="featured-badge">Lead Story</div>
          <div className="featured-article-content">
            <div className="featured-article-text">
              <span className="featured-category">{featuredArticle.category}</span>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <div className="article-tags">
                {featuredArticle.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a href={featuredArticle.link} className="featured-article-link">Read Full Breakdown →</a>
            </div>
            <div className="featured-article-meta">
              <span className="article-date">{featuredArticle.date}</span>
            </div>
          </div>
        </div>
      )}

      {remainingArticles.length > 0 && <div className="section-divider">More Scouting Notes</div>}

      <div className="articles-grid other-articles">
        {remainingArticles.map((article, idx) => (
          <article key={idx} className="article-card">
            <div className="article-meta">
              <span
                className="category-tag"
                style={{ backgroundColor: getCategoryColor(article.category) }}
              >
                {article.category}
              </span>
              <span className="article-date">{article.date}</span>
            </div>
            <h3>{article.title}</h3>
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-tags">
              {article.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={article.link} className="article-link">Read Full Article →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
