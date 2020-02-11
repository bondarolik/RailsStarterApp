class PostsController < ApplicationController
  include DryController
  include Response

  private
    def resource_params
      params.require(:post).permit(:id, :title ,:body)
    end
end
