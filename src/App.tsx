import { useState } from 'react';
import { Book, Download, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { ContentData } from './data/allContent';
import TopicContent from './components/TopicContent';
import { generatePDF } from './utils/pdfGenerator';

function App() {
  const [selectedUnit, setSelectedUnit] = useState<'unit2' | 'unit3'>('unit2');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [downloading, setDownloading] = useState(false);

  const currentUnitData = selectedUnit === 'unit2' ? ContentData.unit2 : ContentData.unit3;
  const topics = Object.keys(currentUnitData.topics);

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      const unitTitle = selectedUnit === 'unit2' ? 'Unit II - CSS' : 'Unit III - JavaScript';
      const content = selectedUnit === 'unit2' ? ContentData.unit2 : ContentData.unit3;
      await generatePDF(unitTitle, content);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Book className="text-blue-600" size={32} />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Web Technologies eBook</h1>
                <p className="text-sm text-slate-600">Comprehensive Learning Resource</p>
              </div>
            </div>
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={18} />
              <span>{downloading ? 'Generating...' : 'Download PDF'}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white border-r border-slate-200 overflow-y-auto transition-transform duration-300 z-40 shadow-lg lg:shadow-none`}
        >
          <div className="p-6">
            {/* Unit Selection */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Select Unit
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedUnit('unit2');
                    setSelectedTopic(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedUnit === 'unit2'
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-2 border-transparent'
                  }`}
                >
                  <div className="font-semibold">Unit II</div>
                  <div className="text-sm opacity-75">Cascading Style Sheet (10 Hours)</div>
                </button>
                <button
                  onClick={() => {
                    setSelectedUnit('unit3');
                    setSelectedTopic(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedUnit === 'unit3'
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-2 border-transparent'
                  }`}
                >
                  <div className="font-semibold">Unit III</div>
                  <div className="text-sm opacity-75">JavaScript (15 Hours)</div>
                </button>
              </div>
            </div>

            {/* Topics List */}
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Topics ({topics.length})
              </h3>
              <div className="space-y-1">
                {topics.map((topic, index) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center space-x-2 group ${
                      selectedTopic === topic
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`text-xs font-medium ${
                      selectedTopic === topic ? 'text-blue-200' : 'text-slate-400'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="flex-1 text-sm">{topic}</span>
                    <ChevronRight
                      size={16}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                        selectedTopic === topic ? 'opacity-100' : ''
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-8">
          {!selectedTopic ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <FileText className="text-blue-600" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {selectedUnit === 'unit2' ? 'Unit II: Cascading Style Sheet' : 'Unit III: JavaScript'}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    {selectedUnit === 'unit2'
                      ? 'Learn CSS fundamentals including selectors, properties, layouts, and advanced styling techniques. Master the art of web page presentation.'
                      : 'Master JavaScript from basics to advanced concepts including ES6+, DOM manipulation, events, and modern programming patterns.'
                    }
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-slate-900 mb-4">
                      What You'll Learn:
                    </h3>
                    <ul className="text-left space-y-2 text-slate-700">
                      {currentUnitData.overview.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setSelectedTopic(topics[0])}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-medium"
                    >
                      Start Learning
                    </button>
                    <button
                      onClick={handleDownloadPDF}
                      disabled={downloading}
                      className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium disabled:opacity-50"
                    >
                      Download Full Notes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <TopicContent
              topic={selectedTopic}
              content={currentUnitData.topics[selectedTopic]}
              onNext={() => {
                const currentIndex = topics.indexOf(selectedTopic);
                if (currentIndex < topics.length - 1) {
                  setSelectedTopic(topics[currentIndex + 1]);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              onPrevious={() => {
                const currentIndex = topics.indexOf(selectedTopic);
                if (currentIndex > 0) {
                  setSelectedTopic(topics[currentIndex - 1]);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              hasNext={topics.indexOf(selectedTopic) < topics.length - 1}
              hasPrevious={topics.indexOf(selectedTopic) > 0}
            />
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
