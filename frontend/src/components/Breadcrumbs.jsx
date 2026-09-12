import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Accessible, Crawlable Breadcrumbs Component for Vedant Hospital
 * Provides semantic HTML with Schema.org microdata and clean visual layout.
 */
export default function Breadcrumbs({ items = [], className = '' }) {
  if (!items || items.length === 0) return null;

  const breadcrumbsList = [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 ${className}`}
    >
      <ol
        className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-slate-500 font-medium"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbsList.map((crumb, index) => {
          const isLast = index === breadcrumbsList.length - 1;

          return (
            <li
              key={index}
              className="inline-flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              )}

              {isLast ? (
                <span
                  className="font-bold text-slate-900"
                  aria-current="page"
                  itemProp="name"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.url}
                  className="hover:text-[#6B2C7E] transition-colors flex items-center gap-1"
                  itemProp="item"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 mb-0.5" aria-hidden="true" />}
                  <span itemProp="name">{crumb.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
