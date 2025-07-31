import React, { useState } from 'react'
import { Share2, Copy, Twitter, Facebook, Linkedin, Check } from 'lucide-react'
import { SiX } from 'react-icons/si'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useToast } from './../hooks/use-toast'

interface ShareButtonProps {
  url: string
  title: string
  description?: string
  className?: string
}

export default function ShareButton({ url, title, description, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const shareData = {
    title,
    text: description || title,
    url,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        toast({
          title: "Shared successfully",
          description: "Content shared using your device's share menu",
        })
      } catch (error) {
        // User cancelled or error occurred, fallback to copy link
        handleCopyLink()
      }
    } else {
      handleCopyLink()
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy link to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleSocialShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    const encodedDescription = encodeURIComponent(description || title)

    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`
        break
      default:
        return
    }

    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
    
    toast({
      title: "Opening share dialog",
      description: `Sharing on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors ${className}`}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 bg-slate-800 border-slate-700 text-slate-200 shadow-2xl"
      >
        <DropdownMenuItem 
          onClick={handleNativeShare}
          className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share via...
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-slate-700" />
        
        <DropdownMenuItem 
          onClick={handleCopyLink}
          className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
        >
          {copied ? (
            <Check className="w-4 h-4 mr-2 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 mr-2" />
          )}
          {copied ? 'Copied!' : 'Copy link'}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-slate-700" />
        
        <DropdownMenuItem 
          onClick={() => handleSocialShare('twitter')}
          className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
        >
          <SiX className="w-4 h-4 mr-2" />
          Share on X
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleSocialShare('facebook')}
          className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
        >
          <Facebook className="w-4 h-4 mr-2 text-blue-400" />
          Share on Facebook
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleSocialShare('linkedin')}
          className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer"
        >
          <Linkedin className="w-4 h-4 mr-2 text-blue-500" />
          Share on LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}