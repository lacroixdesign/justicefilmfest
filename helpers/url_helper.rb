module UrlHelper

  # Judge photo
  def judge_photo_path(judge)
    "#{judge.url}#{judge.slug}.jpg"
  end

  # Film photo
  def film_photo_path(judge)
    "#{judge.url}#{judge.slug}.jpg"
  end

end
