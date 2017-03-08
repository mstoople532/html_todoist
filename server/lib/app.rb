# This is used to select which database to use.
ENV["RACK_ENV"] ||= "development"

require "bundler/setup"
require "sinatra"
require "json"
require "pry"

require_relative "../db/connection"
require_relative "word"

class App < Sinatra::Base
  # Serve any HTML/CSS/JS from the client folder
  set :static, true
  set :public_folder, proc { File.join(root, "..", "..", "client", "public") }

  # Enable the session store
  enable :sessions

  # This ensures that we always return the content-type application/json
  before do
    content_type "application/json"
  end

  # DO NOT REMOVE THIS ENDPOINT IT ENABLES HOSTING HTML FOR THE FRONT END
  get "/" do
    content_type "text/html"
    body File.read(File.join(settings.public_folder, "index.html"))
  end

  # You can delete this route but you should nest your endpoints under /api
  get "/api" do
    { msg: "The server is running" }.to_json
  end

  #####################YOUR ENDPOINTS HERE###############
  before do
    request.body.rewind
    body = request.body.read
    @request_payload = JSON.parse body unless body.blank?
  end

  def respond_with_or_errors(code, obj)
    if obj.valid?
      [code, obj.to_json]
    else
      [422, { errors: obj.errors.to_h }.to_json]
    end
  end

  post "/words" do
    word = Word.create(@request_payload)
    respond_with_or_errors(201, word)
  end

  get "/words" do
    Word.all.to_json
  end

  delete "/words/:id" do
    word = Word.find params["id"]
    word.destroy

    respond_with_or_errors(200, word)
  end
  #####################YOUR ENDPOINTS ABOVE###############
  # If this file is run directly boot the webserver
  run! if app_file == $PROGRAM_NAME
end
