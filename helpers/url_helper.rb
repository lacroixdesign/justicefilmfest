module UrlHelper

  # Judge photo
  def judge_photo_path(judge)
    path = judge.url.split("/").reject(&:empty?).join("/")
    image_path("#{path}.jpg")
  end

  # Film photo
  def film_photo_path(judge)
    "#{judge.url}#{judge.slug}.jpg"
  end

end
