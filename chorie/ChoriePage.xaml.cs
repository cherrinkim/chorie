﻿using Xamarin.Forms;
using System;

namespace chorie
{
	public partial class ChoriePage : ContentPage
	{
		public ChoriePage()
		{
			Title = "Chorie";
			var layout = new StackLayout();

			var logo = new Image
			{
				Aspect = Aspect.AspectFit,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center
			};

			logo.Source = "logo.jpg";

			var createFormationsButton = new Button
			{
				Text = "Create New Formation",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};
			createFormationsButton.Clicked += OnCreateFormationsButtonClick;

			var openExistingButton = new Button
			{
				Text = "Open Existing Formation",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center
			};
			openExistingButton.Clicked += OnOpenExistingButtonClick;

			layout.Children.Add(logo);
			layout.Children.Add(createFormationsButton);
			layout.Children.Add(openExistingButton);
			layout.Spacing = 10;
			Content = layout;
		}

		async void OnCreateFormationsButtonClick(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new CreatePage());	
		}

		async void OnOpenExistingButtonClick(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new OpenPage());
		}
	}
}
