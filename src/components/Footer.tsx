
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-bite-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-foreground">BiteBase<span className="text-bite-600">AI</span></span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered market research for restaurant and cafe businesses.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-muted-foreground hover:text-bite-600 text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-bite-600 text-sm">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-bite-600 text-sm">Case Studies</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-bite-600 text-sm">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/documentation" className="text-muted-foreground hover:text-bite-600 text-sm">Documentation</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-bite-600 text-sm">Guides</Link></li>
              <li><Link to="/api-status" className="text-muted-foreground hover:text-bite-600 text-sm">API Status</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-bite-600 text-sm">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-bite-600 text-sm">About</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-bite-600 text-sm">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-bite-600 text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-bite-600 text-sm">Press</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} BiteBaseAI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-bite-600 text-sm">Privacy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-bite-600 text-sm">Terms</Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-bite-600 text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
