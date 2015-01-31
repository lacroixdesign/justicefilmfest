require "boarding_pass"

set :helpers_dir, "helpers"
set :helpers_filename_glob, "**/*_helper.rb"
set :helpers_filename_to_module_name_proc, Proc.new { |filename|
  basename = File.basename(filename, File.extname(filename))
  basename.camelcase
}

# activate :livereload

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

years = [2014, 2015].map(&:to_s)

years.each do |year|
  activate :blog do |blog|
    blog.name    = "#{year}/judges"
    blog.prefix  = "#{year}/judges"
    blog.sources = "{title}.html"
    blog.layout    = "layouts/judge"
    blog.permalink = "{title}"
    blog.paginate  = false
    blog.default_extension = ".md"
  end
end

activate :directory_indexes

activate :deploy do |deploy|
  deploy.method = :git
  # deploy.remote = "origin" # uses 'origin' by default
  # deploy.branch = "gh-pages" # uses 'gh-pages' by default
end

activate :automatic_image_sizes

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'


# Build-specific configuration
configure :build do
  # activate :sprockets

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :asset_hash
  activate :gzip

  # TODO necessary?
  compass_config do |config|
    config.sass_options = { :debug_info => false }
  end

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
