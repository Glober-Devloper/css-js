import { Code2, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface Section {
  heading: string;
  content: string;
  syntax?: string;
  explanation?: string;
}

interface TopicContentProps {
  topic: string;
  content: Section[];
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function TopicContent({
  topic,
  content,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: TopicContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Topic Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
          <div className="flex items-center space-x-3 mb-2">
            <BookOpen size={28} />
            <span className="text-blue-100 text-sm font-medium">Topic</span>
          </div>
          <h1 className="text-3xl font-bold">{topic}</h1>
        </div>

        {/* Content Sections */}
        <div className="p-8 space-y-8">
          {content.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-blue-600">{index + 1}.</span>
                <span>{section.heading}</span>
              </h2>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>

              {section.syntax && (
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code2 size={18} className="text-slate-600" />
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Syntax
                    </span>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-100 font-mono">
                      <code>{section.syntax}</code>
                    </pre>
                  </div>
                </div>
              )}

              {section.explanation && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-semibold text-blue-900">Explanation: </span>
                    {section.explanation}
                  </p>
                </div>
              )}

              {index < content.length - 1 && (
                <div className="border-t border-slate-200 my-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-200 p-6 bg-slate-50">
          <div className="flex justify-between items-center">
            <button
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next Topic</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
