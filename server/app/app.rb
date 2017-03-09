require_relative "app_helper"

class App < Sinatra::Base
  BOOT_TIME = Time.now

  # This ensures that we always return the content-type application/json
  before do
    content_type "application/json"
  end

  # You can delete this route but you should nest your endpoints under /api
  get "/" do
    {
      msg: "The server is running",
      msg_at: Time.now,
      uptime: Time.now - BOOT_TIME
    }.to_json
  end
  # #################### YOUR ENDPOINTS BELOW ###############

  # #################### YOUR ENDPOINTS ABOVE ###############
  # If this file is run directly boot the webserver
  run! if app_file == $PROGRAM_NAME
end
