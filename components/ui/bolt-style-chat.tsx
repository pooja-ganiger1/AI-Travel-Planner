'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, Sparkles, Bolt, SendHorizontal } from 'lucide-react'

// TYPES
interface Model {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  badge?: string
}

// FIGMA ICON
function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 24C10.208 24 12 22.208 12 20V16H8C5.792 16 4 17.792 4 20C4 22.208 5.792 24 8 24Z" fill="currentColor"/>
      <path d="M4 12C4 9.792 5.792 8 8 8H12V16H8C5.792 16 4 14.208 4 12Z" fill="currentColor"/>
      <path d="M4 4C4 1.792 5.792 0 8 0H12V8H8C5.792 8 4 6.208 4 4Z" fill="currentColor"/>
      <path d="M12 0H16C18.208 0 20 1.792 20 4C20 6.208 18.208 8 16 8H12V0Z" fill="currentColor"/>
      <path d="M20 12C20 14.208 18.208 16 16 16C13.792 16 12 14.208 12 12C12 9.792 13.792 8 16 8C18.208 8 20 9.792 20 12Z" fill="currentColor"/>
    </svg>
  )
}

// MODEL SELECTOR
const models: Model[] = [
  { id: 'qwen', name: 'Qwen3-4B', description: 'Lightweight & fast', icon: <Sparkles className="size-4 text-purple-400" />, badge: 'Default' }
]

function ModelSelector({ selectedModel = 'qwen', onModelChange }: { selectedModel?: string; onModelChange?: (model: Model) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(models.find(m => m.id === selectedModel) || models[0])

  const handleSelect = (model: Model) => {
    setSelected(model)
    setIsOpen(false)
    onModelChange?.(model)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 text-white/60 hover:text-primary hover:bg-white/5 active:scale-95"
      >
        {selected.icon}
        <span>{selected.name}</span>
        <ChevronDown className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-full left-0 mb-2 z-50 min-w-[220px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl shadow-primary/20 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="p-1.5">
              <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">Select Model</div>
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => handleSelect(model)}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-all duration-150 ${selected.id === model.id ? 'bg-primary/10 text-primary' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                >
                  <div className="flex-shrink-0">{model.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{model.name}</span>
                      {model.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-primary/20 text-primary">
                          {model.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-white/40">{model.description}</span>
                  </div>
                  {selected.id === model.id && <Check className="size-4 text-primary flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// CHAT INPUT
function ChatInput({ onSend, placeholder = "What do you want to build?", onModelChange, isLoading }: {
  onSend?: (message: string, modelId: string) => void
  placeholder?: string
  onModelChange?: (modelId: string) => void
  isLoading?: boolean
}) {
  const [message, setMessage] = useState('')

  const [selectedModel, setSelectedModel] = useState('gemini')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`
    }
  }, [message])

  const handleSubmit = () => {
    if (message.trim()) {
      onSend?.(message, selectedModel)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleModelChange = (model: Model) => {
    setSelectedModel(model.id)
    onModelChange?.(model.id)
  }

  return (
    <div className="relative w-full max-w-[680px] mx-auto">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
      <div className="relative rounded-2xl bg-[#1a1a1a] ring-1 ring-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_2px_20px_rgba(0,0,0,0.4)]">
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            className="w-full resize-none bg-transparent text-[15px] text-white placeholder-white/30 px-5 pt-5 pb-3 focus:outline-none min-h-[80px] max-h-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ height: '80px' }}
          />
        </div>

        <div className="flex items-center justify-between px-3 pb-3 pt-1">
          <div className="flex items-center gap-1">
            <ModelSelector selectedModel={selectedModel} onModelChange={handleModelChange} />
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button
              onClick={handleSubmit}
              disabled={!message.trim() || isLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span className="hidden sm:inline">{isLoading ? 'Sending...' : 'Ask now'}</span>
              <SendHorizontal className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Ray Background
function RayBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute left-1/2 -translate-x-1/2 w-[4000px] h-[1800px] sm:w-[6000px]"
        style={{
          background: `radial-gradient(circle at center 800px, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.25) 14%, rgba(139, 92, 246, 0.15) 18%, rgba(139, 92, 246, 0.08) 22%, rgba(3, 3, 3, 0.2) 25%)`
        }}
      />
      <div className="absolute top-[175px] left-1/2 w-[1600px] h-[1600px] sm:top-1/2 sm:w-[3043px] sm:h-[2865px]"
        style={{ transform: 'translate(-50%) rotate(180deg)' }}
      >
        <div className="absolute w-full h-full rounded-full -mt-[13px]" style={{ background: 'radial-gradient(43.89% 25.74% at 50.02% 97.24%, #0a0a0a 0%, #030303 100%)', border: '16px solid white', transform: 'rotate(180deg)', zIndex: 5 }} />
        <div className="absolute w-full h-full rounded-full bg-[#030303] -mt-[11px]" style={{ border: '23px solid #c4b5fd', transform: 'rotate(180deg)', zIndex: 4 }} />
        <div className="absolute w-full h-full rounded-full bg-[#030303] -mt-[8px]" style={{ border: '23px solid #a78bfa', transform: 'rotate(180deg)', zIndex: 3 }} />
        <div className="absolute w-full h-full rounded-full bg-[#030303] -mt-[4px]" style={{ border: '23px solid #8b5cf6', transform: 'rotate(180deg)', zIndex: 2 }} />
        <div className="absolute w-full h-full rounded-full bg-[#030303]" style={{ border: '20px solid #7c3aed', boxShadow: '0 -15px 24.8px rgba(139, 92, 246, 0.6)', transform: 'rotate(180deg)', zIndex: 1 }} />
      </div>
    </div>
  )
}

// ANNOUNCEMENT BADGE COMPONENT
function AnnouncementBadge({ text, href = "#" }: { text: string; href?: string }) {
  const content = (
    <>
      <span className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-70 mix-blend-overlay" style={{ background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.15) 0%, transparent 70%)' }} />
      <span className="absolute -top-px left-1/2 -translate-x-1/2 h-[2px] w-[100px] opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37, 119, 255, 0.8) 20%, rgba(126, 93, 225, 0.8) 50%, rgba(59, 130, 246, 0.8) 80%, transparent 100%)', filter: 'blur(0.5px)' }} />
      <Bolt className="size-4 relative z-10 text-white" />
      <span className="relative z-10 text-white font-medium">{text}</span>
    </>
  )

  const className = "relative inline-flex items-center gap-2 px-5 py-2 min-h-[40px] rounded-full text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
  const style = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(20px) saturate(140%)',
    boxShadow: 'inset 0 1px rgba(255,255,255,0.2), inset 0 -1px rgba(0,0,0,0.1), 0 8px 32px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.08)'
  }

  return href !== '#' ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {content}
    </a>
  ) : (
    <button className={className} style={style}>
      {content}
    </button>
  )
}

// MAIN BOLT CHAT COMPONENT
interface Message {
  role: "user" | "ai"
  content: string
}

interface BoltChatProps {
  title?: string
  subtitle?: string
  announcementText?: string
  announcementHref?: string
  placeholder?: string
  onSend?: (message: string, modelId: string) => void
  messages?: Message[]
  isLoading?: boolean
}

export function BoltStyleChat({
  title = "Where will you",
  subtitle = "Create stunning apps & websites by chatting with AI.",
  announcementText = "Introducing Bolt V2",
  announcementHref = "#",
  placeholder = "What do you want to build?",
  onSend,
  messages = [],
  isLoading = false
}: BoltChatProps) {
  const hasMessages = messages.length > 0;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#030303]">
      <RayBackground />

      {!hasMessages && (
        <div className="absolute top-[120px]">
          {/* Announcement badge */}
          <AnnouncementBadge text={announcementText} href={announcementHref} />
        </div>
      )}

      {/* Content container */}
      <div className={`absolute ${hasMessages ? 'top-[80px]' : 'top-[66%] sm:top-1/2'} left-1/2 -translate-x-1/2 ${hasMessages ? '' : '-translate-y-1/2'} flex flex-col items-center justify-center w-full ${hasMessages ? 'h-[calc(100vh-100px)]' : 'h-full'} overflow-hidden px-4`}>
        {!hasMessages && (
          <>
            {/* Title section */}
            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1">
                {title}{' '}
                <span className="bg-gradient-to-b from-primary via-primary to-white bg-clip-text text-transparent italic">
                  travel
                </span>{' '}
                today?
              </h1>
              <p className="text-base font-semibold sm:text-lg text-white/40">{subtitle}</p>
            </div>
          </>
        )}

        {/* Messages area */}
        {hasMessages && (
          <div className="w-full max-w-[700px] flex-1 overflow-y-auto mb-4 space-y-4 px-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[80%] shadow-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground shadow-primary/20"
                      : "bg-[#1a1a1a] text-white border border-white/[0.08] shadow-black/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="rounded-2xl px-4 py-3 bg-[#1a1a1a] border border-white/[0.08] shadow-lg shadow-black/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Chat input */}
        <div className="w-full max-w-[700px] mb-6 sm:mb-8 mt-2">
          <ChatInput placeholder={placeholder} onSend={onSend} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}
