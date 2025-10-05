# 🌍 AI Trip Planner

An intelligent travel planning platform powered by AI agents that provides personalized travel recommendations, automated itinerary generation, and real-time travel information.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.13+-blue.svg)
![React](https://img.shields.io/badge/react-18.3+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-green.svg)

## ✨ Features

### 🤖 AI-Powered Intelligence
- **Conversational Travel Assistant**: Natural language interaction for travel planning
- **Automated Itinerary Generation**: AI-generated personalized travel plans
- **Multi-Agent Workflow**: LangGraph-based orchestration for complex planning tasks
- **Context-Aware Recommendations**: Smart suggestions based on preferences and constraints

### 🛠️ Integrated Services
- **Weather Information**: Real-time weather data via OpenWeatherMap
- **Place Discovery**: Google Places & Foursquare integration
- **Currency Conversion**: Live exchange rates and expense calculations
- **Travel Research**: Tavily API for comprehensive travel information

### 💻 User Interface
- Modern, responsive dashboard
- Trip management and calendar views
- Interactive AI chat interface
- Destination browsing
- Customizable settings and preferences

## 🏗️ Architecture

```
ai-trip-planner/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
│   └── package.json
│
├── backend/           # FastAPI backend
│   ├── agent/            # AI agent workflows
│   ├── tools/            # LangChain tools
│   ├── Routes/           # API routes
│   ├── utils/            # Helper functions
│   └── main.py           # Application entry
│
└── README.md
```

## 🚀 Tech Stack

### Backend
- **Framework**: FastAPI
- **AI/ML**: LangChain, LangGraph, LangSmith
- **LLM Providers**: OpenAI, Groq, Google
- **Python**: 3.13+
- **Server**: Uvicorn

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.13+
- **uv** (Python package manager) or pip
- API Keys for:
  - OpenAI
  - Groq
  - Google (Places API)
  - Foursquare
  - Tavily
  - OpenWeatherMap
  - Exchange Rate API
  - LangSmith (optional)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ai-trip-planner
```

### 2. Backend Setup

```bash
cd backend

# Create and activate virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
# OR using uv
uv pip install -r requirements.txt

# Configure environment variables
cp .env.name .env
# Edit .env and add your API keys
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
OPENAI_API_KEY=your_openai_key
GROQ_API_KEY=your_groq_key
GOOGLE_API_KEY=your_google_key
GPLACES_API_KEY=your_google_places_key
FOURSQUARE_API_KEY=your_foursquare_key
TAVILAY_API_KEY=your_tavily_key
OPENWEATHERMAP_API_KEY=your_openweather_key
EXCHANGE_RATE_API_KEY=your_exchange_rate_key
LangSmith_API_KEY=your_langsmith_key
```

## 🎯 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 📡 API Endpoints

### Main Endpoints

- `POST /query` - Send travel queries to the AI agent
  ```json
  {
    "question": "Plan a 5-day trip to Paris"
  }
  ```

- Additional routes available via `main_router` (check `/docs` for full API documentation)

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend linting
cd frontend
npm run lint
```

## 📦 Project Structure Details

### Backend Components

- **agent/**: AI agent workflow implementation using LangGraph
- **tools/**: Custom LangChain tools for various APIs
  - `weather_info_tool.py`: Weather data retrieval
  - `place_search_tool.py`: Location and place search
  - `currency_conversion_tool.py`: Currency exchange
  - `expense_calculator_tool.py`: Budget calculations
  - `arthamatic_op_tool.py`: Mathematical operations
- **Routes/**: API route handlers
- **utils/**: Helper functions and utilities

### Frontend Components

- **pages/**: Main application pages
  - `Dashboard.tsx`: Main dashboard view
  - `Trips.tsx`: Trip management
  - `Itinerary.tsx`: Itinerary planning
  - `Recommendations.tsx`: AI recommendations
  - `CalendarPage.tsx`: Calendar view
  - `SettingsPage.tsx`: User settings
- **components/**: Reusable UI components
  - `AIAssistant.tsx`: Chat interface
  - `Header.tsx`, `Sidebar.tsx`: Layout components
  - `ui/`: Shadcn/ui component library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- LangChain & LangGraph for AI orchestration
- Shadcn/ui for beautiful UI components
- FastAPI for the robust backend framework
- All the amazing API providers

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using AI and modern web technologies**
