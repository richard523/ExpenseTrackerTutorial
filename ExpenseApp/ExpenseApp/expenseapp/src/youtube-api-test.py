from youtube_transcript_api import YouTubeTranscriptApi as yta

srt = yta.get_transcript("40xh_hFP_XE", languages=['en'])

print(srt)
