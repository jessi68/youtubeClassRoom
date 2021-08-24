export const saveButton = () => {
    return `
            <div class="d-flex justify-end">
            <button class="save-video">⬇️ 저장</button>
            </div>
           `
}



export const youtubeFrame = ({id: {videoId}, snippet: {title, channelTitle}, year, month, date}, metaDataView, index) => {
    return `<article class="clip" id=${index}>
    <div class="preview-container">
      <iframe
        width="100%"
        height="118"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="content-container pt-2 px-1">
      <h3>${title}</h3>
      <div>
        <a
          href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
          target="_blank"
          class="channel-name mt-1"
        >
           ${channelTitle}
        </a>
        <div class="meta">
          <p>${year}년 ${month}월 ${date}일</p>
        </div>
         ${metaDataView}
      </div>
    </div>
  </article>`
}