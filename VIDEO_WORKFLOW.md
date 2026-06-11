# Video Workflow

This file documents the repeatable process for adding project videos to this site.

## Folder layout

- Put each project's raw video files into `assets/videos/<project-number>/`
- Current project folders are:
  - `assets/videos/01`
  - `assets/videos/02`
  - `assets/videos/03`
  - `assets/videos/04`
  - `assets/videos/05`
  - `assets/videos/06`
  - `assets/videos/07`

Recommended naming:

- Keep the original downloaded file as-is
- Export a web-ready file as `demo.mp4`
- If one project has multiple videos, use `demo-1.mp4`, `demo-2.mp4`, ...
- All web-facing videos should be silent

## Fast path for Feishu `.qt` videos

Feishu `.qt` files in this repo are already H.264 video + AAC audio inside a QuickTime container, so they do not need full re-encoding.

Use `ffprobe` to inspect the file:

```bash
ffprobe -v error \
  -show_entries format=format_name,duration:stream=index,codec_name,codec_type,width,height,r_frame_rate \
  -of default=noprint_wrappers=1 \
  assets/videos/01/your-file.qt
```

If the streams are already `h264` and `aac`, remux to MP4 without re-encoding:

```bash
ffmpeg -y -i assets/videos/01/your-file.qt -c copy assets/videos/01/demo.mp4
```

Repeat for each folder:

```bash
ffmpeg -y -i assets/videos/02/your-file.qt -c copy assets/videos/02/demo.mp4
ffmpeg -y -i assets/videos/03/your-file.qt -c copy assets/videos/03/demo.mp4
ffmpeg -y -i assets/videos/04/your-file.qt -c copy assets/videos/04/demo.mp4
ffmpeg -y -i assets/videos/05/your-file.qt -c copy assets/videos/05/demo.mp4
```

## If remux fails

If a future file is not browser-friendly, re-encode it:

```bash
ffmpeg -y -i assets/videos/01/your-file.qt \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 128k \
  assets/videos/01/demo.mp4
```

## Remove audio for website use

The website version should not contain an audio track.

After creating `demo.mp4`, strip the audio stream while keeping the video stream unchanged:

```bash
ffmpeg -y -i assets/videos/01/demo.mp4 -map 0:v:0 -c copy -an assets/videos/01/demo-muted.mp4
mv assets/videos/01/demo-muted.mp4 assets/videos/01/demo.mp4
```

For multiple files, repeat the same pattern:

```bash
ffmpeg -y -i assets/videos/06/demo-1.mp4 -map 0:v:0 -c copy -an assets/videos/06/demo-1-muted.mp4
mv assets/videos/06/demo-1-muted.mp4 assets/videos/06/demo-1.mp4

ffmpeg -y -i assets/videos/06/demo-2.mp4 -map 0:v:0 -c copy -an assets/videos/06/demo-2-muted.mp4
mv assets/videos/06/demo-2-muted.mp4 assets/videos/06/demo-2.mp4
```

## How videos are embedded in the page

Project videos are embedded directly in `index.html` using:

```html
<div class="project-media">
  <video controls preload="metadata" playsinline>
    <source src="assets/videos/01/demo.mp4" type="video/mp4" />
  </video>
</div>
```

To add a new video:

1. Put the source file into the matching numbered folder.
2. Convert or remux it to `demo.mp4`.
3. Remove the audio track from the exported MP4.
4. If that project does not already contain a `<video>` block in `index.html`, add one under the project description.

If one project contains multiple videos:

1. Export them as `demo-1.mp4`, `demo-2.mp4`, ...
2. Remove audio from each exported MP4.
3. Add one `<div class="project-media">...</div>` block per video.

## What to tell the AI next time

Use a prompt like:

```text
Please read VIDEO_WORKFLOW.md, inspect the new files under assets/videos, convert them into browser-playable mp4 files, remove all audio tracks, and wire them into the matching project cards in index.html.
```

## Important boundary

Do not ask the AI to remove watermarks, obscure ownership marks, or erase third-party logos from the videos.

Recommended approach:

- Export or obtain the original clean video before adding it to the site.
- If a vendor mark must not appear publicly, replace the source material with a version you are authorized to publish.
