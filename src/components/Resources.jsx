import { resources } from '../ressurser';

function Resources({ category }) {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div className="resource-item">
      <h2>{category.toUpperCase()}</h2>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;