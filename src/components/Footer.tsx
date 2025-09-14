import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2 text-black">Pokédex</h3>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
            <span>© 2025 Pokédex</span>
            <span>•</span>
            <a 
              href="https://github.com/amanda-voss/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <Github size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;